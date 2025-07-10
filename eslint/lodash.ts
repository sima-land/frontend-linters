import lodash from 'eslint-plugin-lodash';
import type { Linter } from 'eslint';

const config: Linter.Config = {
  name: 'sima-land/lodash',

  plugins: {
    lodash,
  },

  rules: {
    // чтобы импорт lodash был в едином стиле в виде именованного импорта из корня пакета
    'lodash/import-scope': ['error', 'member'],
  },
};

export default config;
