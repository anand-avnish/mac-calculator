/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    fontFamily: {
      'pressStart':['"Press Start 2P"', 'cursive'],
      'raleway':['Raleway', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'courgette':['Courgette', 'cursive'],
      'montserrat':['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'desktop': "url('/src/assets/abstractbg.jpg')",
      }
    },
  },
  plugins: [],
}
