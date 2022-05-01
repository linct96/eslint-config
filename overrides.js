module.exports = {
  rules: {
    // 禁用冲突规则
    // '@typescript-eslint/explicit-module-boundary-types': 'error'
  },
  overrides: [
    {
      // 只在 ts 中启用
      files: ['**/*.ts'],
      rules: {
        // '@typescript-eslint/explicit-module-boundary-types': ['error']
      }
    }
  ]
}
