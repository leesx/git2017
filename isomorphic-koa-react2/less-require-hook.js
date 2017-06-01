/**
 * Hook file for the babel css-modules-transform plugin,
 * used to preprocess less files to css format on server side.
 */
//在.babelrc中配置引用
//将less文件转为为服务器端也可以解析的模块
var less = require('less');

module.exports = function processLess(data, filename) {
  var result;
  less.render(data, {
    filename: filename,
    syncImport: true
  }, function (error, output) {
    error && console.log('fail to parse less: ', error);
    result = output.css;
  });
  return result.toString('utf8');
};
