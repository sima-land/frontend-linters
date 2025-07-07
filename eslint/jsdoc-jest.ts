import type { Linter } from 'eslint';
import jsdoc from './jsdoc.js';

const config: Linter.Config = {
  ...jsdoc,

  name: 'sima-land/jsdoc-jest',

  rules: {
    ...jsdoc.rules,

    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: ['jest-environment'],
      },
    ],
  },
};

export default config;
