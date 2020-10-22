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
});
