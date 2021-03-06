const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      teal: colors.teal,
      white: colors.white,
    },
    extend: {},
  },
  fontFamily: {
    sans: ['Open Sans', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
