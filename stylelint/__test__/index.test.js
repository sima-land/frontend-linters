const stylelint = require('stylelint');
const config = require('..');

describe('stylelint configuration', () => {
  it('should prevent using not "px" units font-size', async function () {
    const { errored, results } = await stylelint.lint({
      code: 'div { \n  font-size: 10pt;\n}\n',
      config,
    });

    expect(results[0].deprecations).toHaveLength(0);

    expect(errored).toBe(true);

    expect(results[0].warnings[0].text)
      .toBe('Unexpected unit "pt" for property "font-size" (declaration-property-unit-disallowed-list)');
  });

  it('should throw error with unknown at-rules', async function () {
    const { errored, results } = await stylelint.lint({
      code: '@hello-world \'string\';\n',
      config,
    });

    expect(results[0].deprecations).toHaveLength(0);

    expect(errored).toBe(true);

    expect(results[0].warnings[0].text)
      .toBe('Unexpected unknown at-rule "@hello-world" (at-rule-no-unknown) (scss/at-rule-no-unknown)');
  });

  it('should not throw error with scss at-rules', async function () {
    const { errored, results } = await stylelint.lint({
      code: '@use \'scss:math\';\n@warn \'hello world\'\n',
      config,
    });

    expect(results[0].deprecations).toHaveLength(0);
    expect(errored).toBe(false);
  });
});
