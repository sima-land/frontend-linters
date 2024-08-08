import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

const configs = [
  // используем рекомендуемые правила ESLint
  eslint.configs.recommended,

  // используем рекомендуемые правила typescript-eslint
  ...tseslint.configs.recommended,

  {
    name: 'sima-land/typescript',

    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // переопределяем правило
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',

      // переопределяем правило
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': [
        'error',
        {
          builtinGlobals: false,
        },
      ],

      // переопределяем правило
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          variables: false,
          functions: false,
          classes: false,
        },
      ],

      // отключаем правило
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
];

export default configs;
