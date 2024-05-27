/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./../pages/**/*.{html,js}"],
  theme: {
    extend: {
      bgImage: {
        'bg-img': URL(/imgs/library.jpg),
      }
    },
  },
  plugins: [],
}