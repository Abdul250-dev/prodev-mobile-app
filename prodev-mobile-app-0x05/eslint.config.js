// https://docs.expo.dev/guides/using-eslint/
// eslint.config.js
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        alias: {
          map: [["@", "./"]],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
]);
