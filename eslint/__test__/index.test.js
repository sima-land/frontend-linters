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
export function test ({ prop: { a, b, c } }) {
  return [a, b, c].map(Number).reduce((i, j) => i + j) + 123;
}
`;

describe('eslint config', () => {
  it('should not return errors', async function () {
    const eslint = new ESLint();
    const results = await eslint.lintText(validCode);

    results.forEach(result => {
      expect(result.errorCount).toBe(0);
    });
  });
});
