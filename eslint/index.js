const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  plugins: [
    'lodash',
    'react',
    'import',
    'jsdoc',
    'jest',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': false,
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
    'array-bracket-newline': [
      'error',
      'consistent',
    ],
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    'array-callback-return': 'error',
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: false,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    curly: [
      'error',
      'all',
    ],
    'dot-notation': 'error',
    'eol-last': [
      'error',
      'always',
    ],
    eqeqeq: 'error',
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
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
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        ignoredNodes: [
          'TemplateLiteral *',
        ],
      },
    ],
    'jsdoc/check-indentation': 'error',
    'jsdoc/check-param-names': ['error', {
      checkDestructured: false,
    }],
    'jsdoc/check-tag-names': 'error',
    'jsdoc/newline-after-description': [
      'error',
      'never',
    ],
    'jsdoc/no-undefined-types': [
      'error',
      {
        definedTypes: [
          'ReactElement',
          'SyntheticEvent',
        ],
      },
    ],
    'jsdoc/require-description-complete-sentence': [
      'error',
      {
        tags: [
          'typedef',
          'property',
        ],
      },
    ],
    'jsdoc/require-param': ['error', {
      checkDestructured: false,
    }],
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-yields': 'off',
    'jsdoc/require-returns': 'error',
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/valid-types': 'error',
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
    'key-spacing': [
      'error',
      {
        mode: 'strict',
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'lines-around-comment': [
      'error',
      {
        allowArrayEnd: true,
        allowArrayStart: true,
        allowBlockEnd: true,
        allowBlockStart: true,
        allowClassEnd: true,
        allowClassStart: true,
        allowObjectEnd: true,
        allowObjectStart: true,
        beforeBlockComment: true,
        beforeLineComment: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'no-array-constructor': 'error',
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': [
      'error',
      'all',
      {
        ignoreJSX: 'all',
        nestedBinaryExpressions: false,
      },
    ],
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
    'no-restricted-globals': [
      'error',
      ...restrictedGlobals,
    ],
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
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
    ],
    'one-var': [
      'error',
      {
        var: 'never',
        let: 'never',
        const: 'never',
      },
    ],
    'operator-linebreak': [
      'error',
      'before',
    ],
    'padded-blocks': [
      'error',
      'never',
    ],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quote-props': [
      'error', 'as-needed',
    ],
    quotes: [
      'error',
      'single',
    ],
    radix: [
      'error',
      'as-needed',
    ],
    'react/display-name': [
      'off',
    ],
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': [
      'error',
      'tag-aligned',
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
      },
    ],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        children: true,
      },
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never',
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        when:
        'multiline',
      },
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    'react/no-children-prop': [
      'off',
    ],
    'react/prop-types': [
      'off',
    ],
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
    semi: [
      'error',
      'always',
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      'always',
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': 'error',
    'spaced-comment': [
      'error',
      'always',
    ],
    'template-curly-spacing': [
      'error',
      'never',
    ],
    'template-tag-spacing': [
      'error',
      'never',
    ],
    'yield-star-spacing': [
      'error',
      {
        before: true,
        after: false,
      },
    ],
    'lodash/import-scope': [
      'error',
      'member',
    ],
  },
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
      ],
      plugins: [
        '@typescript-eslint',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
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
    {
      files: [
        '**/*.test.*',
      ],
      env: {
        'jest/globals': true,
      },
      rules: {
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/valid-expect': 'error',
      },
    },
    {
      files: [
        '**/*.test.*',
        '**/*.stories.*',
      ],
      rules: {
        'require-jsdoc': 'off',
        'react/prop-types': 'off',
        'jsdoc/require-jsdoc': 'off',
      },
    },
  ],
};
