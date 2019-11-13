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
    indentation: 2,
    'selector-max-id': 3,
    'max-nesting-depth': 10,
    'selector-max-compound-selectors': 10,
    'function-url-quotes': 'never',
    'scss/at-import-no-partial-leading-underscore': null,
    'order/order': null,
    'string-quotes': null,
    'selector-class-pattern': '^([a-z0-9]*)(-[a-z0-9]+)*$',
    'order/properties-alphabetical-order': null,
    'number-leading-zero': 'never',
    'selector-no-qualifying-type': null,
    'scss/at-extend-no-missing-placeholder': null,
    'selector-combinator-space-after': 'always',
    'declaration-colon-space-after': 'always',
    'property-no-unknown': null,
    'declaration-no-important': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'scss/at-mixin-pattern': null,
    'at-rule-no-vendor-prefix': null,
    'scss/percent-placeholder-pattern': null,
    'selector-no-vendor-prefix': null,
    'selector-list-comma-space-before': 'never-single-line',
    'no-descending-specificity': null,
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
    'media-feature-name-no-vendor-prefix': true,
    'scss/dollar-variable-pattern': null,
    'declaration-property-value-blacklist': [
      {
        '/^.*/': [
          'unset',
        ],
      },
      {
        severity: 'error',
      },
    ],
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
  },
};
