import jsdoc from 'eslint-plugin-jsdoc';

const config = {
  name: 'sima-land/jsdoc',

  plugins: {
    jsdoc,
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

  rules: {
    ...jsdoc.configs['flat/recommended'].rules,

    'jsdoc/require-jsdoc': [
      'error',
      {
        checkGetters: true,
        checkSetters: true,

        // https://github.com/gajus/eslint-plugin-jsdoc/issues/1292#issuecomment-2270551333
        contexts: [
          'VariableDeclarator > ArrowFunctionExpression',
          'AssignmentExpression > ArrowFunctionExpression',
          'ExportDefaultDeclaration > ArrowFunctionExpression',
        ],

        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
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
    'jsdoc/tag-lines': ['error', 'never'],
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
  },
};

export default config;
