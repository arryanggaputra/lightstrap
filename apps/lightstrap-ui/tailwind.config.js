const { join } = require('path');

module.exports = {
  purge: [join(__dirname, './**/*.{js,ts,jsx,tsx}')],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('../../libs/lightstrap/src')],
};
