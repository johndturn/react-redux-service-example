module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'arrow-parens': ['error', 'as-needed'],
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
  },
  overrides: [
    {
      files: ['translationRunner.js'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
