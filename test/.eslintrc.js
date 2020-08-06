module.exports = {
  env: {
    mocha: true,
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "should|expect",
      },
    ],
  },
};
