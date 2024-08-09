import base from './base.js';
import jest from './jest.js';
import jsdoc from './jsdoc.js';
import jsdocTs from './jsdoc-ts.js';
import jsdocJest from './jsdoc-jest.js';
import lodash from './lodash.js';
import react from './react.js';
import typescript from './typescript.js';

const configs = [
  // для всех правил игнорируем артефакты сборки и установленные модули
  {
    name: 'sima-land/ignores',
    ignores: ['**/build/**', '**/dist/**', '**/node_modules/**'],
  },

  {
    ...base,
    files: ['**/*.{js,jsx,ts,tsx,cjs,mjs,mts,cts}'],
  },

  {
    ...react,
    files: ['**/*.{js,jsx,ts,tsx,cjs,mjs,mts,cts}'],
  },

  {
    ...jsdoc,
    files: ['**/*.{js,jsx,cjs,mjs}'],
  },

  {
    ...jsdocTs,
    files: ['**/*.{ts,tsx,mts,cts}'],
  },

  {
    ...jsdocJest,
    files: ['**/*.test.{js,jsx,ts,tsx,cjs,mjs,mts,cts}'],
  },

  {
    ...lodash,
    files: ['**/*.{js,jsx,ts,tsx,cjs,mjs,mts,cts}'],
  },

  {
    ...jest,
    files: ['**/*.test.{js,jsx,ts,tsx,cjs,mjs,mts,cts}'],
  },

  ...typescript.map(item => ({
    ...item,
    files: ['**/*.{ts,tsx,mts,cts}'],
  })),
];

export default configs;
