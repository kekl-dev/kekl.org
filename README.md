# KEKL Landing Page (kekl.org)

Website ini adalah landing page untuk komunitas KEKL (Eks Kolese Loyola) yang dibangun dengan Nuxt (Vue) dan dideploy ke Firebase Hosting.

## Informasi cepat

- Repo: `kekl.org`
- Framework: Nuxt 4 + Vue 3
- Mode rendering: SPA / CSR (SSR nonaktif)
- Styling: Tailwind CSS
- Hosting: Firebase Hosting
- Output hosting: `.output/public`
- Project Firebase: `kekl-lp` (lihat `.firebaserc`)

## Versi

Versi saat ini: **0.1.3**

Skema versi menggunakan **Semantic Versioning (SemVer)**: `MAJOR.MINOR.PATCH`

- MAJOR: perubahan besar yang berpotensi breaking (struktur/route/kontrak publik berubah)
- MINOR: fitur baru yang tetap kompatibel
- PATCH: perbaikan bug/perubahan kecil/maintenance

## Prasyarat

- Node.js (wajib sesuai requirement Nuxt 4.x yang terpasang)
  - Disarankan: Node **22.12+** atau **24.11+** (LTS)
  - Catatan: Node 25.x tidak termasuk dalam range engine yang didukung Nuxt saat ini, jadi bisa memunculkan warning `EBADENGINE` saat install.
- npm (sudah termasuk Node)
- Firebase CLI (`firebase-tools`)
  - Instal global (opsional): `npm i -g firebase-tools`
  - Atau jalankan via npx: `npx firebase --version`

## Perintah penting

Script yang tersedia (lihat `package.json`):

- `npm run dev` → mode development
- `npm run generate` → build output statis untuk Firebase Hosting (SPA/CSR) ke `.output/public`
- `npm test` / `npm run test:nuxt` → test via Vitest

## Mode rendering: SPA (CSR) tanpa SSR

Firebase Hosting hanya menyajikan file statis dan tidak menjalankan server Node.js untuk SSR. Karena itu project ini dikonfigurasi sebagai **SPA (Client-Side Rendering)**:

- SSR dimatikan di `nuxt.config.ts` dengan `ssr: false`.
- Build untuk production menggunakan `npm run generate` agar menghasilkan output statis di `.output/public`.
- Untuk mendukung routing SPA (jika suatu saat ada route non-root), `firebase.json` memiliki rewrite `** → /index.html`.

## Menjalankan lokal (development)

```bash
npm install
npm run dev
```

Akses: `http://localhost:3000`

## Konfigurasi environment

Konfigurasi runtime publik ada di `nuxt.config.ts`:

- `runtimeConfig.public.spreadsheetApi` (dibaca dari env `SPREADSHEET_API`)

Catatan:

- Saat ini FAQ menggunakan data lokal (`app/data/faq.ts`). Di `FaqSection.vue` ada opsi fetch API (dikomentari) bila nanti ingin ambil dari Google Apps Script/Spreadsheet.
- Jika nanti mengaktifkan fetch FAQ, pastikan `SPREADSHEET_API` tersedia pada saat build/runtime sesuai target deployment.

## Struktur aplikasi (source of truth)

Struktur utama project:

```text
.
├─ app/
│  ├─ app.vue
│  ├─ assets/
│  │  ├─ css/main.css
│  │  └─ img/...
│  ├─ components/
│  │  ├─ Header.vue
│  │  ├─ Hero.vue
│  │  ├─ IntroSection.vue
│  │  ├─ AlumniBenefits.vue
│  │  ├─ Programs.vue
│  │  ├─ RegionalChapter.vue
│  │  ├─ EndowmentFund.vue
│  │  ├─ Scholarship.vue
│  │  ├─ SocialFeed.vue
│  │  ├─ FaqSection.vue
│  │  └─ Footer.vue
│  ├─ composables/
│  │  └─ useLanguage.ts
│  ├─ data/
│  │  ├─ faq.ts
│  │  └─ instagramPosts.ts
│  └─ utils/
│     └─ translations.ts
├─ public/
│  ├─ favicon.ico
│  └─ robots.txt
├─ firebase.json
├─ .firebaserc
├─ nuxt.config.ts
└─ package.json
```

### Entry point halaman

`app/app.vue` adalah halaman utama (single page) yang merangkai semua section secara berurutan:

1. `Header`
2. `Hero`
3. `IntroSection`
4. `AlumniBenefits`
5. `Programs`
6. `RegionalChapter`
7. `EndowmentFund`
8. `Scholarship`
9. `SocialFeed`
10. `FaqSection`
11. `Footer`

Jika menambah/menghapus section, lakukan di `app/app.vue`.

### Bahasa & terjemahan

Sistem bahasa menggunakan composable `useLanguage()`:

- State global: `currentLang` (`'id' | 'en'`)
- Fungsi `t('path.key')` untuk akses string dari `app/utils/translations.ts`

Menambah teks baru:

1. Tambah key di `app/utils/translations.ts` (di `id` dan `en`)
2. Panggil dari komponen: `{{ t('namaSection.namaKey') }}`

### Data konten statis

- FAQ: `app/data/faq.ts`
  - Struktur: array item berisi `id` dan `en` (question/answer)
- Instagram feed: `app/data/instagramPosts.ts`
  - Berisi list post (id, image import, likes, caption, link)
  - Sumber image ada di `app/assets/img/InstagramPosts/`

## Deployment (Firebase Hosting)

Project ini menggunakan Firebase Hosting yang meng-serve output statis dari Nuxt.

### Konfigurasi Firebase yang digunakan

- Project id default: `kekl-lp` di `.firebaserc`
- Hosting public dir: `.output/public` di `firebase.json`

### Setup pertama kali (hanya sekali per mesin)

```bash
firebase login
firebase use kekl-lp
```

Verifikasi project aktif:

```bash
firebase projects:list
firebase use
```

### Build static untuk hosting

```bash
npm install
npm run generate
```

Hasil output akan ada di:

- `.output/public/` (yang diupload ke Firebase Hosting)

### Deploy ke production

```bash
firebase deploy --only hosting
```

Jika ingin deploy semuanya (hosting + resource lain jika suatu saat ditambah):

```bash
firebase deploy
```

### Preview sebelum deploy (opsional tapi disarankan)

Cara paling sederhana untuk memastikan hasil generate benar adalah menjalankan preview static dari folder output.

Contoh (butuh package `serve` via npx):

```bash
npm run generate
npx serve .output/public
```

Lalu buka URL yang ditampilkan (biasanya `http://localhost:3000` atau port lain).

### Preview channel (staging/PR) (opsional)

Firebase Hosting punya preview channels:

```bash
npm run generate
firebase hosting:channel:deploy preview-$(date +%Y%m%d)
```

CLI akan mengeluarkan URL preview yang bisa dibagikan.

### Troubleshooting deployment

- Halaman blank/asset tidak muncul setelah deploy:
  - Pastikan yang dijalankan adalah `npm run generate`, bukan hanya `npm run build`.
  - Pastikan `firebase.json` menunjuk ke `.output/public`.
- Deploy ke project yang salah:
  - Jalankan `firebase use` dan pastikan menunjuk ke `kekl-lp`.
- Perubahan tidak terlihat:
  - Pastikan build ulang (`npm run generate`) sebelum deploy.
  - Cek cache browser / lakukan hard refresh.

## Standar perubahan (maintenance)

### Update link eksternal

Beberapa link eksternal berada di komponen:

- `Header.vue`: link ke KEKL Directory dan program terkait
- `Programs.vue`, `EndowmentFund.vue`: link program/framer website

Jika domain/URL berubah, update di komponen terkait dan lakukan deploy ulang.

### Update konten FAQ

Edit `app/data/faq.ts`:

- Tambah item baru → tambah object baru di array
- Edit jawaban → edit field `id.answer` / `en.answer`

### Update konten Instagram (mock)

Edit `app/data/instagramPosts.ts` dan asset gambar di `app/assets/img/InstagramPosts/`.

Jika ingin mengambil data Instagram real-time, perlu backend/proxy karena keterbatasan API publik Instagram. Saat ini implementasi adalah data statis.

## Quality gate (sebelum rilis)

Minimal checklist:

```bash
npm install
npm run generate
npm test
```

Jika ada linting tambahan dari Nuxt ESLint, jalankan sesuai konfigurasi project (lihat `eslint.config.mjs`).

## Changelog

Aturan:

- Setiap perubahan fungsional/konfigurasi/deployment wajib menambah entry changelog di bawah.
- Naikkan versi di bagian “Versi saat ini” dan tambahkan entri baru paling atas.
- Format tanggal: `YYYY-MM-DD`.

### 0.1.3 - 2026-06-20

- Update dependency untuk menghapus kerentanan security (audit: 0 vulnerabilities).
- Tambah `overrides` untuk memaksa versi aman transitive dependency (contoh: `esbuild`).
- Atur Vitest agar `npm test` tidak gagal ketika belum ada file test (`passWithNoTests: true`).

### 0.1.2 - 2026-06-20

- Konfigurasi Nuxt menjadi SPA/CSR dengan mematikan SSR (`ssr: false`).
- Tambah rewrite Firebase Hosting untuk SPA routing (`** -> /index.html`).

### 0.1.1 - 2026-06-20

- Ubah Firebase project id default menjadi `kekl-lp`.

### 0.1.0 - 2026-06-20

- Inisialisasi project landing page Nuxt + Firebase Hosting.

## Panduan rilis (cara update versi)

1. Tentukan perubahan termasuk MAJOR/MINOR/PATCH.
2. Update “Versi saat ini” di README.
3. Tambahkan entri baru di “Changelog” dengan tanggal hari ini dan ringkasan perubahan.
4. Jalankan quality gate (minimal `npm run generate` + `npm test`).
5. Deploy ke Firebase Hosting.
