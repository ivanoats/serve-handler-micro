module.exports = {
  env: {
    browser: true,
    node: true,
    "jest/globals": true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ["prettier", "jest"],
  rules: {
    "prettier/prettier": "warn"
  },
  extends: ["plugin:prettier/recommended", "plugin:jest/recommended"]
}
