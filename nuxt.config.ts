// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/guide/recipes/custom-routing

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      mode: 'history',
    },
    warningIgnoreFilters: ['legacy-js-api', 'mixed-decls', 'slash-div'],
  },

  vite: {
    logLevel: "error", // Oculta warnings, mostra apenas erros
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern',
          silenceDeprecations: ['legacy-js-api', 'mixed-decls', 'slash-div'],
        },
        scss: {
          additionalData: `
            @use "rfs/scss" as rfs;
            @use "@/assets/scss/variables.scss" as *;
          `,
        },
      }
    }
  },

  ssr: false,

  css: [
    '~/assets/css/base.css',
    '~/assets/css/style.css',
    '@/assets/css/index.css',
  ],

  plugins: [
    '~/plugins/bootstrap-vue.js'
  ],

  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  devtools: { enabled: true },

  colorMode: {
    preference: 'light'
  },

  router: {
    options: {}
  },

  hooks: {
    'pages:extend' (pages) {
      // add a route
      pages.push(
        {
          path: '/',
          alias: ['', '/', '/home'],
          name: 'Inicio',
          file: '~/pages/Home.vue'
        },
        {
          path: "/play",
          name: "Jogar",
          file: '~/pages/Game.vue'
        },
        {
          path: "/rules",
          name: "Regras",
          file: '~/pages/Rules.vue'
        },
        {
          path: "/about",
          name: "Sobre",
          file: '~/pages/About.vue'
        },
      )
    }
  },

  compatibilityDate: '2025-04-01'
})