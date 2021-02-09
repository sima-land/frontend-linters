const { ESLint } = require('eslint');

const validCode = `
/**
 * Returns a number.
 * @param {Object} props Props.
 * @param {Object} props.prop Prop.
 * @param {string} props.prop.a String.
 * @param {string} props.prop.b String.
 * @param {string} props.prop.c String.
 * @return {number} A number.
 */
export function testFn1 ({ prop = { a: 1, b: 2, c: 3 } }) {
  return [prop.a, prop.b, prop.c].map(Number).reduce((i, j) => i + j) + 123;
}

/**
 * Returns a number.
 * @param {Object} props Props.
 * @param {Object} props.prop Prop.
 * @param {string} props.prop.a String.
 * @param {string} props.prop.b String.
 * @param {string} props.prop.c String.
 * @return {number} A number.
 */
export function testFn2 ({ prop: { a, b, c } }) {
  return [a, b, c].map(Number).reduce((i, j) => i + j) + 123;
}

/**
 * Returns a number too.
 * @param {{ prop }} props Props.
 * @return {number} A number.
 */
export function testFn3 ({ prop }) {
  return Number(prop);
}

/**
 * Yields numbers.
 */
export function * testFn4 () {
  yield 1;
  yield 2;
  yield 3;
}

/**
 * @param {import('./event').CustomEvent} event Event.
 */
export function testTypeImport (event) {
  window.customEvents.push(event);
}
`;

describe('eslint config', () => {
  it('should not return errors', async function () {
    const eslint = new ESLint();
    const results = await eslint.lintText(validCode);

    results.forEach(result => {
      expect(result.errorCount).toBe(0);
      expect(result.warningCount).toBe(0);
    });
  });
});
