// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },

  alias: {
    '@data': '/src/data', 
  },

  modules: [
    '@nuxt/eslint',
    "@nuxt/image",
    '@pinia/nuxt'
  ],

  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    // Настраиваем локальный провайдер
    providers: {
      ipx: {
        name: 'ipx',
        provider: 'ipx',
        options: {}
      }
    }
  },

  compatibilityDate: '2025-04-27'
})