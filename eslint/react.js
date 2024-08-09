import react from 'eslint-plugin-react';

// @todo Включить когда eslint-plugin-react-hooks научится работать с ESLint 9
// import reactHooks from 'eslint-plugin-react-hooks';
// import { fixupPluginRules } from '@eslint/compat';

const reactRecommended = react.configs.flat.recommended;
const jsxRuntime = react.configs.flat['jsx-runtime'];

const config = {
  ...reactRecommended,
  ...jsxRuntime,

  name: 'sima-land/react',

  settings: {
    react: {
      version: 'detect',
    },
  },

  plugins: {
    ...reactRecommended.plugins,
    ...jsxRuntime.plugins,

    // @todo Включить когда eslint-plugin-react-hooks научится работать с ESLint 9
    // 'react-hooks': fixupPluginRules(reactHooks),
  },

  rules: {
    ...reactRecommended.rules,
    ...jsxRuntime.rules,

    // переопределяем тк договорились что свойство displayName у компонентов необязательно
    'react/display-name': 'off',

    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',

    // @todo Думаю стоит включить для единообразия
    'react/no-children-prop': 'off',
  },
};

export default config;
