/** @type {import("stylelint").Config} */
const config = {
  extends: ['stylelint-config-sass-guidelines'],
  plugins: ['stylelint-scss'],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.html'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': null,
    'declaration-block-no-duplicate-properties': true,
    'declaration-no-important': null,
    'declaration-property-value-disallowed-list': [
      {
        '/^.*/': ['unset'],
      },
      {
        severity: 'error',
      },
    ],

    // по соглашению с командой дизайнеров не используем для размера шрифта ничего кроме пикселей
    'declaration-property-unit-disallowed-list': {
      'font-size': ['rem', 'em', 'pt', 'percent'],
    },

    'function-url-quotes': 'never',
    'max-nesting-depth': 10,
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'property-no-unknown': null,
    'property-no-vendor-prefix': null,
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment', 'inside-block'],
        ignore: [],
      },
    ],
    'scss/at-extend-no-missing-placeholder': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/percent-placeholder-pattern': null,
    'selector-class-pattern': '^([a-z0-9]*)(-[a-z0-9]+)*$',
    'selector-max-compound-selectors': 10,
    'selector-max-id': 3,
    'selector-no-qualifying-type': null,
    'selector-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
  },
};

module.exports = config;
