module.exports = {
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    /**
     * 禁止使用不安全的生命周期方法 componentWillMount, componentWillReceiveProps, componentWillUpdate
     */
    'react/no-unsafe': [
      'error',
      {
        checkAliases: true
      }
    ]
  }
}
