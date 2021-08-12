module.exports = {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'jest/no-mocks-import': 'off',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error',
    'require-jsdoc': 'off',
    'jsdoc/require-jsdoc': 'off',
  },
};
