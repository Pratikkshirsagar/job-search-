const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-grey-1': '#dadce0',
        'brand-blue-1': '#1967d2 ',
        'brand-green-1': '#137333',
      },
    },
  },
  variants: {
    extends: {
      margin: ['first'],
    },
  },
  plugins: [],
};
