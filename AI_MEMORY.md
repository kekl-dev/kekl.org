# AI Memory — KEKL Landing Page (kekl.org)

Dokumen ini adalah catatan konteks praktis untuk agent/AI berikutnya agar cepat memahami project, koneksi yang dipakai, dan keputusan teknis yang sudah dibuat.

## Ringkasan aplikasi

- Aplikasi: landing page KEKL (Eks Kolese Loyola)
- Framework: Nuxt 4 + Vue 3
- Mode: Static (SSG/prerender) + CSR hydration (tanpa server SSR runtime)
- Target hosting: Firebase Hosting (static hosting)
- Output yang di-deploy: `.output/public`

## Deployment & Firebase

- Firebase project id default: `kekl-lp` (di `.firebaserc`)
- Firebase Hosting config: `firebase.json`
  - `public: ".output/public"`
  - SPA rewrite: `** -> /index.html` untuk mencegah 404 saat routing non-root
- Flow deploy yang dipakai:
  1. `npm install`
  2. `npm run generate` (wajib untuk static output)
  3. `firebase deploy --only hosting`

Catatan penting:

- Firebase Hosting tidak menjalankan Node server untuk SSR runtime.
- Tetapi untuk menghasilkan `index.html` (static output), konfigurasi saat ini memakai `ssr: true` agar Nuxt bisa melakukan prerender saat build (`npm run generate`).
- Pitfall: jika `ssr: false`, output `.output/public` bisa tidak memiliki `index.html` sehingga Firebase menampilkan error “no index.html found”.

## Struktur source

- Routing Nuxt (file-based):
  - Layout root: `app/app.vue` (berisi `Header`, `<NuxtPage />`, dan `Footer`)
  - Landing page: `app/pages/index.vue` (merangkai section landing page)
  - Halaman committee: `app/pages/committee.vue` (path `/committee`)
- Komponen: `app/components/*`
- Terjemahan: `app/utils/translations.ts`
  - Menggunakan composable `useLanguage()` (`app/composables/useLanguage.ts`)
  - Bahasa yang didukung: `id` dan `en`

## Konten & data

- FAQ menggunakan data lokal: `app/data/faq.ts`
  - Ada opsi fetch dari `SPREADSHEET_API` namun saat ini masih dikomentari di `FaqSection.vue`
- Social feed memakai data statis: `app/data/instagramPosts.ts` + assets `app/assets/img/InstagramPosts/*`

## Komponen Scholarship (perubahan penting)

- Bagian “Cards Right” sudah disederhanakan menjadi 1 kartu ringkasan.
- Copywriting sudah diperhalus agar tidak eksplisit meminta “timbal balik”, tetapi menekankan “tetap terhubung” dan “membawa dampak baik”.
- Layout kartu:
  - Image kiri tetap tampil pada layar lebar dengan `md:aspect-[4/3]` (hindari `md:h-full` tanpa parent height)
  - Spacing section ditambah (`py-20 md:py-28`)
- Key i18n yang dipakai kartu ringkasan (ID/EN) berada di `translations.ts`:
  - `scholarship.card_tag`
  - `scholarship.card_title`
  - `scholarship.card_desc`
  - `scholarship.card_pill1..card_pill4`
  - `scholarship.card_alt`
Catatan: key benefit lama (`benefit1_*`, `benefit2_*`, `benefit3_*`) masih ada tetapi tidak dipakai oleh UI scholarship saat ini.

## Keamanan dependency (npm audit)

- Kerentanan high/critical sudah dibersihkan sampai `npm audit` menunjukkan `0 vulnerabilities`.
- Ditambahkan `overrides` di `package.json` untuk mengunci transitive dependency ke versi aman (contoh: `esbuild`).

## Node version / engine warning

- Setelah update dependency, beberapa package (Nuxt 4.4.x) punya requirement engine Node tertentu.
- Disarankan gunakan Node LTS: 22.12+ atau 24.11+.
- Node 25.x bisa menimbulkan warning `EBADENGINE` saat install (build masih bisa jalan, tapi jangan dijadikan patokan).

## Local dev: error “net::ERR_ABORTED / Failed to fetch dynamically imported module”

Jika di localhost muncul banyak error seperti:

- `net::ERR_ABORTED http://localhost:3000/_nuxt/@fs/...`
- `TypeError: Failed to fetch dynamically imported module ...`

Biasanya penyebabnya tab browser memegang referensi modul lama ketika dev server restart/ubah hash.

Langkah cepat:

1. Pastikan dev server jalan: `npm run dev`
2. Hard reload browser (Cmd+Shift+R) atau tutup tab dan buka ulang
3. Jika masih: hapus `.nuxt/` dan `node_modules/.cache/` lalu `npm install` dan jalankan dev lagi

## Perintah penting (ringkas)

- Dev: `npm run dev`
- Build static: `npm run generate`
- Audit: `npm audit`
- Deploy: `firebase deploy --only hosting`

## Versioning & changelog

- Source of truth versi & changelog ada di `README.md` (SemVer).
- Setiap perubahan fungsional/konfigurasi/dependency wajib menaikkan versi dan menambah entri changelog.
