module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:nuxt/recommended',
    'prettier/vue',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    'no-unused-vars': 'warn',
    'no-irregular-whitespace': 'warn',
  },
}
