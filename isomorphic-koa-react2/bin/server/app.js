'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _viewhook = require('./middlewares/viewhook');

var _viewhook2 = _interopRequireDefault(_viewhook);

var _matchRoute = require('./middlewares/matchRoute');

var _matchRoute2 = _interopRequireDefault(_matchRoute);

var _controllers = require('./controllers');

var _controllers2 = _interopRequireDefault(_controllers);

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import routes from './../common/routes'

//import multer from 'koa-multer'
/**
 * 注意了....
 * 当前Koa version ^2.0.0 配套的koa-router需要在^7.0.0
 */
var app = new _koa2.default();

app.use((0, _koaLogger2.default)()).use((0, _koaBodyparser2.default)()).use((0, _viewhook2.default)()).use((0, _matchRoute2.default)()).use(_controllers2.default.routes()).use(_controllers2.default.allowedMethods()).use((0, _koaStatic2.default)(_path2.default.join(process.cwd(), 'static'))).listen(_env2.default.NODE_SERVER_PORT);

console.log('listening on port ' + _env2.default.NODE_SERVER_PORT + ' -- ' + process.env.NODE_ENV);