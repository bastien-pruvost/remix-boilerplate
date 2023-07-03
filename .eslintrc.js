/** @type {import("eslint").Linter.Config} */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "prettier",
  ],
  plugins: ["import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prefer-const": "error",
    "no-var": "error",
    "no-console": "off",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "react/prop-types": "off",
    // "react/react-in-jsx-scope": "off",
    // "react/jsx-uses-react": "off",
    // "react/jsx-uses-vars": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
  },

  // // Storybook eslint config
  // overrides: [
  //   {
  //     files: ["*.stories.*"],
  //     extends: ["plugin:storybook/recommended"],
  //     rules: {},
  //   },
  // ],
};
