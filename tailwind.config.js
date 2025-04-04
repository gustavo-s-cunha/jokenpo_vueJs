module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        vueGreen: "rgb(66,185,131)",
        vueGreenHover: "rgb(50,161,111)",
        vueBlue: "rgb(98,136,241)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
