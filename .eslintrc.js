module.exports = {
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn"
  },
  extends: ["plugin:prettier/recommended"]
}
