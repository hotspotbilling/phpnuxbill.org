// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  extends: ['shadcn-docs-nuxt'],
  app: {
    baseURL: '/'
  },

  site: {
    url: 'https://phpnuxbill.org',
  },

  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'id',
        name: 'Indonesia',
        language: 'id-ID',
      },
    ],
  },

  compatibilityDate: '2024-07-06',

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/scripts',
  ],
});