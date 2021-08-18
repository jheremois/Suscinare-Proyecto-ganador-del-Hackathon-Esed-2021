// module.exports = {
//   important: true,
//   purge: {
//     enabled: false,
//     content: ['./src/**/*.{html,ts}'],
//   },
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//   ],
// }

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}