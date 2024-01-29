// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      title: "From Zero to Front-End Hero",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "A blog about learning programming, the subject of web applications mainly for junior beginners",
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
