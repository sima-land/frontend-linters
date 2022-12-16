module.exports = {
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        // хуки из пакета `@sima-land/ui-nucleons`
        additionalHooks: '(useIdentityRef)',
      },
    ],
  },
};
