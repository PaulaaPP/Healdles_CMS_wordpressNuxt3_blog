module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        PTSerif: ["PT Serif", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],

        // Dodaj inne niestandardowe czcionki, jeśli są potrzebne
      },
      colors: {
        // Dodaj własne kolory tutaj
        darkGreen: "#1b313e",
        lightGreen: "#156973",
        brightGreen: "#07c0b6",
        emeraldGreen: "#10b981",

        darkPurple: "#4e3461",
        lightPurple: "#9e5b9e",
        brightPurple: "#e762dc",
      },
      animation: {
        lights: "lights 8s infinite",
      },
      keyframes: {
        lights: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },

    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};
