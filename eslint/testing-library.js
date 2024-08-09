const config = {
  name: 'sima-land/testing-library',

  rules: {
    // @todo заменить на правила из плагина eslint-plugin-testing-library когда он научится работать с ESLint 9
    // https://github.com/sima-land/frontend-linters/issues/30#issuecomment-2277223493
    'no-restricted-syntax': [
      'error',
      {
        selector: "CallExpression[callee.name='debug']",
        message: 'Be sure to clean up before commit (testing-library debug)',
      },
    ],
  },
};

export default config;
