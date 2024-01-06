/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["turbo", "airbnb", "airbnb-typescript", "airbnb/hooks", "prettier"],
  env: {
    es2022: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: { project: true },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "import/prefer-default-export": "off",
    "react/require-default-props": "warn",
    "@typescript-eslint/no-use-before-define": "warn",
    "react/no-unescaped-entities": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "global-require": "off",
    "react/jsx-no-bind": "off",
    "react/style-prop-object": "off",
    "import/extensions": "off",
  },
  ignorePatterns: [
    "**/*.config.js",
    "**/*.config.cjs",
    "**/.eslintrc.cjs",
    "dist",
    "pnpm-lock.yaml",
  ],
  reportUnusedDisableDirectives: true,
};

module.exports = config;
