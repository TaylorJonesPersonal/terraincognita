const { off } = require('process');

module.exports = {
    extends: ['standard-with-typescript', 'prettier'],
    parserOptions: {
      project: './tsconfig.json',
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/restrict-template-expressions": "off",
      "no-unused-vars":"off",
    }
  };