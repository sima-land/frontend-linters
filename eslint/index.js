const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  plugins: ['lodash', 'react', 'import', 'jsdoc'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
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
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsdoc/recommended',
    'prettier',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'array-callback-return': 'error',
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
    'jsdoc/check-indentation': 'error',
    'jsdoc/check-param-names': [
      'error',
      {
        checkDestructured: false,
      },
    ],
    'jsdoc/check-tag-names': 'error',
    'jsdoc/newline-after-description': ['error', 'never'],
    'jsdoc/no-undefined-types': [
      'error',
      {
        definedTypes: ['ReactElement', 'SyntheticEvent'],
      },
    ],
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
    'no-mixed-operators': 'error',
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
    'react/display-name': ['off'],
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-children-prop': ['off'],
    'react/prop-types': ['off'],
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
  overrides: [
    // typescript
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-yields': 'off',
      },
    },

    // jest-тесты
    {
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      files: ['**/*.test.*', '**/__mocks__/*', '**/__fixtures__/*'],
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
    },
  ],
};
