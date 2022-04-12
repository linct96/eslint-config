const path = require('path')
const resolvePath = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  extends: [
    resolvePath('./javascript.js'),
    resolvePath('./typescript.js'),
    resolvePath('./react.js'),
    resolvePath('./overrides.js')
  ]
}
