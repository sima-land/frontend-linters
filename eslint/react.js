module.exports = {
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended'],
  rules: {
    'jsdoc/no-undefined-types': [
      'error',
      {
        definedTypes: ['ReactElement', 'SyntheticEvent'],
      },
    ],
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
  },
};
