/** @type {import("prettier").Options} */

module.exports = {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  endOfLine: "lf",
  tabWidth: 2,
  printWidth: 100,
  semi: true,
  trailingComma: "es5",
  singleQuote: false,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(remix/(.*)$)|^(remix$)",
    "^(storybook/(.*)$)|^(storybook$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^~/types/(.*)$",
    "^~/config/(.*)$",
    "^~/hooks/(.*)$",
    "^~/utils/(.*)$",
    "^~/pages/(.*)$",
    "^~/components/ui/(.*)$",
    "^~/components/(.*)$",
    "^~/styles/(.*)$",
    "^~/(.*)$",
    "^[./]",
    "",
  ],
};
