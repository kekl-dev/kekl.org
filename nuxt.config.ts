// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxt/icon'
  ],

  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      spreadsheetApi: process.env.SPREADSHEET_API
    }
  }
})