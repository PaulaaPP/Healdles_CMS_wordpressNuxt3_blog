// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      title: "Od Zera do Frontentd Developera",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "Blog o nauce programowania, tematyka aplikacji webowych głównie dla początkujących Juniorów",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/color-mode"],

  // colorMode: {
  //   classSuffix: "",
  // },

  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },
});
