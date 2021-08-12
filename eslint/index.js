module.exports = {
  extends: ['./base.js', './react.js'],
  overrides: [
    {
      files: ['**/*.test.*', '**/__mocks__/*', '**/__fixtures__/*'],
      extends: ['./jest.js'],
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./typescript.js'],
    },
  ],
};
