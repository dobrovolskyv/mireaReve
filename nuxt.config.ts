// https://nuxt.com/docs/api/configuration/nuxt-config
/// <reference types="nuxt" />

import tsconfigPaths from 'vite-tsconfig-paths' 

export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  components: true,

  alias: {
    '@data': '/src/data', 
  },

  modules: [
    '@nuxt/eslint',
    "@nuxt/image",
    '@pinia/nuxt',
    'nuxt-marquee',
  ],

  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // @ts-expect-error
  image: {
    providers: {
      ipx: {
        name: 'ipx',
        provider: 'ipx',
        options: {}
      }
    }
  },
  vite: {
    plugins: [tsconfigPaths()]
  },

  compatibilityDate: '2025-05-03',
})