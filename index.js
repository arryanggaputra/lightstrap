const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

const buttons = require("./src/components/button");

module.exports = plugin.withOptions(
  () => {
    return function ({ addComponents }) {
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
            },
            secondary: {
              DEFAULT: colors.gray[500],
            },
            success: {
              DEFAULT: colors.green[700],
            },
            danger: {
              DEFAULT: colors.red[600],
            },
            warning: {
              DEFAULT: colors.yellow[400],
            },
            info: {
              DEFAULT: "#0dc9f0",
            },
          },
        },
      },
    };
  }
);
