module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      jsx: true
    },
    requireConfigFile: false // 强制使用babel parser
  },
  rules: {
    'prettier/prettier': ['warn', require('./prettier')]
  }
}
