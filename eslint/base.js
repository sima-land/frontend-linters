const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  plugins: ['lodash', 'import', 'jsdoc'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
      tagNamePreference: {
        arg: 'param',
        argument: 'param',
        class: 'constructor',
        returns: 'return',
        virtual: 'abstract',
      },
      preferredTypes: {
        any: '*',
        array: 'Array',
        Boolean: 'boolean',
        float: 'number',
        function: 'Function',
        int: 'number',
        integer: 'number',
        Null: 'null',
        Number: 'number',
        object: 'Object',
        String: 'string',
        Symbol: 'symbol',
        Undefined: 'undefined',
      },
    },
  },
  extends: ['eslint:recommended', 'plugin:jsdoc/recommended', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      parserOpts: {
        plugins: ['jsx'],
      },
    },
  },
  rules: {
    'array-callback-return': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: false,
      },
    ],
    'dot-notation': 'error',
    'eol-last': ['error', 'always'],
    eqeqeq: 'error',
    'import/newline-after-import': [
      'error',
      {
        count: 1,
      },
    ],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowArray: false,
        allowArrowFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/no-duplicates': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/check-param-names': [
      'error',
      {
        checkDestructured: false,
      },
    ],
    'jsdoc/check-tag-names': 'error',
    'jsdoc/newline-after-description': ['error', 'never'],
    'jsdoc/no-undefined-types': ['error'],
    'jsdoc/require-description-complete-sentence': [
      'error',
      {
        tags: ['typedef', 'property'],
      },
    ],
    'jsdoc/require-param': [
      'error',
      {
        checkDestructured: false,
      },
    ],
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-yields': 'off',
    'jsdoc/require-returns': 'error',
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/valid-types': 'error',
    'no-array-constructor': 'error',
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-extra-boolean-cast': 'error',
    'no-implicit-coercion': 'error',

    // @todo Отключаем до тех пор пока в Prettier не решат как быть: https://github.com/prettier/prettier/issues/187
    // 'no-mixed-operators': 'error',

    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 1,
        maxEOF: 0,
      },
    ],
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-restricted-globals': ['error', ...restrictedGlobals],
    'no-shadow': [
      'error',
      {
        builtinGlobals: false,
      },
    ],
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-unneeded-ternary': 'error',
    'no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
        classes: false,
      },
    ],
    'no-useless-constructor': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'one-var': [
      'error',
      {
        var: 'never',
        let: 'never',
        const: 'never',
      },
    ],
    'padded-blocks': ['error', 'never'],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    radix: ['error', 'as-needed'],
    'require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
      },
    ],
    'space-infix-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'lodash/import-scope': ['error', 'member'],
  },
};
