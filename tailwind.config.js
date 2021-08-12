const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
      }
    }
  }
};
