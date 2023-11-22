/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./public/**/*.{html,js}','./views/**/*.hbs'],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary:'#0f172a'
      },
      fontFamily:{
        roboto:['Roboto',...defaultTheme.fontFamily.sans]//si el usuario no tiene roboto se aplica defaul sans
      }
    },
  },
  plugins: [],
}

