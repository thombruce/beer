const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    // To extend the color palette (though this can also be done by adding additional colors to colors object)
    extend: {
      colors: {
        primary: { ...colors.pink, ...{ DEFAULT: colors.pink['500'] } },
        secondary: { ...colors.cyan, ...{ DEFAULT: colors.cyan['500'] } },
        dark: { ...colors.trueGray, ...{ DEFAULT: colors.black, 950: '#080808' } },
        light: { ...colors.sky, ...{ DEFAULT: colors.sky['50'] } }
      },
      // To add fonts
      fontFamily: {
        poster: ['Milkshake']
      }
    }
  }
}
