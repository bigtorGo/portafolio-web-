/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/html/utils/withMT")


module.exports = withMT({
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
  plugins: [
    require('tailwindcss-animated'), 
  ],
});

