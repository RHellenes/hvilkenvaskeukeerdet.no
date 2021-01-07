module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    // '@nuxtjs',
    // 'prettier',
    // 'prettier/vue',
    // 'plugin:prettier/recommended',
    // 'plugin:nuxt/recommended',
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
    semi: ['warn', 'always'],
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-unused-vars': 'warn',
  },
};
