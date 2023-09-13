// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      title: "Od Zera do Frontentd Developera",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },
});
