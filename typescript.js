module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': ['warn', require('./prettier')],
    '@typescript-eslint/explicit-module-boundary-types': ['off']
  }
}
