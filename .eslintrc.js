module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  rules: {
    'no-new': 'off',
    'space-before-function-paren': ['error', 'never'],
    'prettier/prettier': 'error',
    'prefer-const': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  plugins: ['@typescript-eslint', 'html', 'eslint-plugin-prettier'],
  parserOptions: {
    ecmaVersion: 2020
  }
}
