module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  plugins: [
    'stylelint-scss',
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'for',
          'if',
          'each',
          'include',
          'mixin',
          'extend',
        ],
      },
    ],
    'at-rule-no-vendor-prefix': null,
    'declaration-block-no-duplicate-properties': true,
    'declaration-colon-space-after': 'always',
    'declaration-no-important': null,
    'declaration-property-value-disallowed-list': [
      {
        '/^.*/': [
          'unset',
        ],
      },
      {
        severity: 'error',
      },
    ],
    'declaration-property-unit-disallowed-list': {
      'font-size': ['rem', 'em', 'pt', 'percent'],
    },
    'function-url-quotes': 'never',
    indentation: 2,
    'max-nesting-depth': 10,
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'number-leading-zero': 'never',
    'order/order': null,
    'order/properties-alphabetical-order': null,
    'property-no-unknown': null,
    'property-no-vendor-prefix': null,
    'rule-empty-line-before': [
      'always',
      {
        except: [
          'after-single-line-comment',
          'inside-block',
        ],
        ignore: [],
      },
    ],
    'scss/at-extend-no-missing-placeholder': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/percent-placeholder-pattern': null,
    'selector-class-pattern': '^([a-z0-9]*)(-[a-z0-9]+)*$',
    'selector-combinator-space-after': 'always',
    'selector-list-comma-space-before': 'never-single-line',
    'selector-max-compound-selectors': 10,
    'selector-max-id': 3,
    'selector-no-qualifying-type': null,
    'selector-no-vendor-prefix': null,
    'string-quotes': 'single',
    'value-no-vendor-prefix': null,
  },
};
