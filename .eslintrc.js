module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    mocha: true,
    mongo: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        endOfLine: 'auto',
      },
    ],
  },
};
