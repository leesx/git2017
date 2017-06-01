'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = html;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _env = require('./../../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = _env2.default.ASSETS_SERVICE_BASEURL;
var suffix = _env2.default.HTTP_SCRIPT_SUFFIX;
var nodeServerPort = _env2.default.HTTP_SERVER_PORT;

function html(pageInfo, content, initialState) {

  return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>' + pageInfo.title + '</title>\n\t\t\t\t<meta charset="utf-8" />\n\t\t\t\t<meta name="keywords" content="' + pageInfo.keywords + '" />\n\t\t\t\t<meta name="description"  content="' + pageInfo.description + '" />\n\t\t\t\t<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">\n\t\t    <meta content="yes" name="apple-mobile-web-app-capable" />\n\t\t    <meta content="yes" name="apple-touch-fullscreen" />\n\t\t    <meta content="telephone=no,email=no" name="format-detection" />\n\t\t    <meta content="maximum-dpr=2" name="flexible" />\n\t\t    <meta content="modeName=750-12" name="grid" />\n\t\t\t\t<link rel="stylesheet" href="' + baseUrl + '/static/styles/bootstrap/dist/css/bootstrap' + suffix + '.css" />\n      </head>\n      <body>\n        ' + content + '\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n        </script>\n\n        <script src="' + baseUrl + '/static/scripts/common/vendor' + suffix + '.js"></script>\n        <script src="' + baseUrl + '/static/scripts/index' + suffix + '.js"></script>\n\n      </body>\n    </html>\n    ';
}