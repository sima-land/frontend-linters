import jsdoc from './jsdoc.js';

const config = {
  ...jsdoc,

  name: 'sima-land/jsdoc-ts',

  rules: {
    ...jsdoc.rules,

    // в TypeScript не используем типы в JSDoc
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/require-yields': 'off',
    'jsdoc/require-property-type': 'off',
  },
};

export default config;
