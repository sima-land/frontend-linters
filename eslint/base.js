import eslint from '@eslint/js';
import globals from 'globals';
import restrictedGlobals from 'confusing-browser-globals';

const config = {
  name: 'sima-land/base',

  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.browser,
    },
  },

  rules: {
    ...eslint.configs.recommended.rules,

    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
    eqeqeq: 'error',
    radix: ['error', 'as-needed'],
    'array-callback-return': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'dot-notation': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-extra-boolean-cast': 'error',
    'no-implicit-coercion': 'error',
    'no-multi-assign': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-object-constructor': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-globals': ['error', ...restrictedGlobals],
    'no-shadow': ['error', { builtinGlobals: false }],
    'no-undef': 'error',
    'no-unneeded-ternary': 'error',
    'no-use-before-define': ['error', { variables: false, functions: false, classes: false }],
    'no-useless-constructor': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', { var: 'never', let: 'never', const: 'never' }],
    'prefer-const': 'error',
    'prefer-template': 'error',

    // =========================================================================

    // @todo Вернуть эти deprecated правила в виде аналогов из пакета @stylistic/eslint-plugin-js
    // 'eol-last': ['error', 'always'],
    // 'no-multi-spaces': 'error',
    // 'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1, maxEOF: 0 }],
    // 'no-trailing-spaces': 'error',
    // 'padded-blocks': ['error', 'never'],
    // 'quote-props': ['error', 'as-needed'],
    // 'space-infix-ops': 'error',
    // 'spaced-comment': ['error', 'always'],

    // =========================================================================

    // @todo Включить когда eslint-plugin-import научится работать с ESLint 9
    // 'import/newline-after-import': ['error', { count: 1 }],
    // 'import/no-anonymous-default-export': [
    //   'error',
    //   {
    //     allowAnonymousClass: false,
    //     allowAnonymousFunction: false,
    //     allowArray: false,
    //     allowArrowFunction: false,
    //     allowCallExpression: true,
    //     allowLiteral: false,
    //     allowObject: false,
    //   },
    // ],
    // 'import/no-duplicates': 'error',

    // =========================================================================

    // @todo Включить когда в Prettier решат как быть: https://github.com/prettier/prettier/issues/187
    // 'no-mixed-operators': 'error',
  },
};

export default config;
