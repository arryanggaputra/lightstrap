const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

const alert = require('./components/alert');
const buttons = require('./components/button');
const buttonGroup = require('./components/button-group');

module.exports = plugin.withOptions(
  () => {
    return function ({ addComponents }) {
      addComponents(alert);
      addComponents(buttons);
      addComponents(buttonGroup);
    };
  },
  () => {
    return {
      theme: {
        extend: {
          colors: {
            primary: {
              light: colors.blue[200],
              DEFAULT: colors.blue[700],
              dark: colors.blue[800],
            },
            secondary: {
              light: colors.gray[200],
              DEFAULT: colors.gray[500],
              dark: colors.gray[600],
            },
            success: {
              light: colors.green[200],
              DEFAULT: colors.green[700],
              dark: colors.green[800],
            },
            danger: {
              light: colors.red[200],
              DEFAULT: colors.red[600],
              dark: colors.red[700],
            },
            warning: {
              light: colors.yellow[100],
              DEFAULT: colors.yellow[400],
              dark: colors.yellow[500],
            },
            info: {
              light: colors.lightBlue[100],
              DEFAULT: colors.lightBlue[400],
              dark: colors.lightBlue[500],
            },
          },
        },
      },
    };
  }
);
