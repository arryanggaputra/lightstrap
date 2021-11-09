const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

const alert = require("./src/components/alert");
const buttons = require("./src/components/button");

module.exports = plugin.withOptions(
  () => {
    return function ({ addComponents }) {
      addComponents(alert);
      addComponents(buttons);
    };
  },
  () => {
    return {
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: colors.blue[700],
              dark: colors.blue[800],
            },
            secondary: {
              DEFAULT: colors.gray[500],
              dark: colors.gray[600],
            },
            success: {
              DEFAULT: colors.green[700],
              dark: colors.green[800],
            },
            danger: {
              DEFAULT: colors.red[600],
              dark: colors.red[700],
            },
            warning: {
              DEFAULT: colors.yellow[400],
              dark: colors.yellow[500],
            },
            info: {
              DEFAULT: colors.lightBlue[400],
              dark: colors.lightBlue[500],
            },
          },
        },
      },
    };
  }
);
