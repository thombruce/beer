const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    // To extend the color palette (though this can also be done by adding additional colors to colors object)
    extend: {
      // To add fonts
      fontFamily: {
        poster: ['Milkshake']
      }
    }
  }
}
