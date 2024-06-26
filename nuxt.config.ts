// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  pages: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "" },
        { href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap", rel: "stylesheet" }
      ]
    },
  },
  plugins: [
    '~/plugins/directive.client.ts',
  ],
  modules: [
    "@nuxt/content",
    'nuxt-icon',
    '@pinia/nuxt',
    '@hypernym/nuxt-gsap',
    "@nuxt/image"
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    }
  },
  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons'
      },
    ],
  },
  image: {
    quality: 70,
  }
})