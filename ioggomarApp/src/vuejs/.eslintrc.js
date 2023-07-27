module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "prettier",
  ],
  rules: {
    // override/add rules settings here, such as:
    "@typescript-eslint/no-explicit-any": "off",
  },
};
