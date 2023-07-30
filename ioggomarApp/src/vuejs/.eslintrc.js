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
  overrides: [
    {
      files: [
        "ioggomarApp/src/**/*.js",
        "ioggomarApp/src/**/*.vue",
        "ioggomarApp/src/**/*.ts",
      ],
      extends: ["eslint:recommended", "@vue/typescript/recommended"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
