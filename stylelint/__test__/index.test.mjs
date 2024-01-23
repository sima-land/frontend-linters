import assert from 'node:assert';
import { test, describe } from 'node:test';
import stylelint from 'stylelint';
import config from '../index.js';

describe('stylelint configuration', () => {
  test('should prevent using not "px" units font-size', async function () {
    const { errored, results } = await stylelint.lint({
      code: 'div { \n  font-size: 10pt;\n}\n',
      config,
    });

    assert.equal(results[0].deprecations.length, 0);

    assert.equal(errored, true);

    assert.equal(
      results[0].warnings[0].text,
      'Unexpected unit "pt" for property "font-size" (declaration-property-unit-disallowed-list)',
    );
  });

  test('should throw error with unknown at-rules', async function () {
    const { errored, results } = await stylelint.lint({
      code: "@hello-world 'string';\n",
      config,
    });

    assert.equal(results[0].deprecations.length, 0);

    assert.equal(errored, true);

    assert.equal(
      results[0].warnings[0].text,
      'Unexpected unknown at-rule "@hello-world" (scss/at-rule-no-unknown)',
    );
  });

  test('should not throw error with scss at-rules', async function () {
    const { errored, results } = await stylelint.lint({
      code: "@use 'scss:math';\n@warn 'hello world'\n",
      config,
    });

    assert.equal(results[0].deprecations.length, 0);
    assert.equal(errored, false);
  });
});
