module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'globalorg',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'warn',
    'object-curly-newline': 'off',
    'object-property-newline': ['off', { allowAllPropertiesOnSameLine: true }],
    'max-classes-per-file': ['error', { ignoreExpressions: true, max: 2 }],
  },
};
