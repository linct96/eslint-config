// prettier文档地址 https://prettier.io/docs/en/options.html
module.exports = {
  singleQuote: true, //单双引号
  jsxSingleQuote: false, //jsx单双引号
  semi: false, //结尾分号
  bracketSpacing: true, //在对象，数组括号与文字之间加空格 "{ foo: bar }"
  trailingComma: 'none', //在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  arrowParens: 'avoid' //(x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
}
