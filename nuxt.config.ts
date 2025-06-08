// https://nuxt.com/docs/api/configuration/nuxt-config
/// <reference types="nuxt" />

import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"

        }
      ],
    }
  },
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