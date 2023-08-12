// CONFIG TAILWIND
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Albert Sans', ...defaultTheme.fontFamily.sans],
    },
  },
};
