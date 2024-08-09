import jest from 'eslint-plugin-jest';

const config = {
  ...jest.configs['flat/recommended'],

  rules: {
    ...jest.configs['flat/recommended'].rules,

    // переопределяем некоторые правила
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error',

    // в unit-тестах нам не нужен JSDoc
    'jsdoc/require-jsdoc': 'off',

    // @todo Думаю это правило стоит включить
    'jest/no-mocks-import': 'off',
  },
};

export default config;
