'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _env = require('./../env');

var _env2 = _interopRequireDefault(_env);

var _utils = require('../../common/helpers/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// 接口服务器地址
var connectServer = {
	protocol: 'http://',
	host: _env2.default.API_SERVICE_BASEURL,
	port: ''
};
var serverDomainProtocol = connectServer.protocol;
var serverDomainHost = connectServer.host;
var serverDomainPort = connectServer.port;
var serverDomain = '' + serverDomainProtocol + serverDomainHost;

var router = (0, _koaRouter2.default)();
exports.default = router;
// import multer from 'koa-router-multer';
//import user from './user'
//user(router)
// import supportchain from './supplyChain';
// supportchain(router);

router.get('*', function (ctx) {
	var pageInfo = {
		title: '云pad',
		keywords: '哗啦啦,门店宝,点餐',
		description: '智能餐饮管理系统,餐饮移动互联网时代引领者.'
	};
	ctx.render(pageInfo);
});

var URLLIST = ['/saas/order/*'];

URLLIST.forEach(function (URL) {
	router.all(URL, function () {
		var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
			var req, res, request, response, query, method, reqUrl, reqContentType, reqBody, reqData, headers, options;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:

							(0, _utils.logger)("------------------------------");

							req = ctx.req, res = ctx.res, request = ctx.request, response = ctx.response, query = ctx.query, method = ctx.method;
							reqUrl = '' + serverDomain + req.url;

							(0, _utils.logger)('[POST Request]:>>>>>>>>>>', reqUrl);
							reqContentType = req.headers['content-type'];
							reqBody = method === 'GET' ? query : ctx.request.body;

							// 根据 请求的 content-type 判断用哪种格式化方式

							reqData = reqContentType.indexOf('json') !== -1 ? JSON.stringify(reqBody) : _querystring2.default.stringify(reqBody);

							(0, _utils.logger)('\u8BF7\u6C42\u53C2\u6570:' + reqData);
							headers = {
								'content-type': reqContentType,
								origin: 'koa2 server',
								cookie: req.headers.cookie
							};
							options = {
								method: req.method,
								headers: headers,
								body: reqData,
								credentials: 'include' };

							(0, _utils.logger)(reqUrl, options);
							_context.next = 13;
							return (0, _isomorphicFetch2.default)(reqUrl, options).then(function (response) {
								// TODO: 未完成：完善合理的接口返回
								switch (response.status) {
									case 200:
										ctx.body = response.body;
										ctx.type = reqContentType;
										break;

									case 404:
										ctx.body = { code: 404 };
										break;

									default:
										ctx.body = {
											code: 500,
											msg: response.statusText,
											success: 'false'
										};
										break;
								}
							}, function (e) {
								ctx.body = {
									code: 500,
									error: e.message
								};
							});

						case 13:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		return function (_x) {
			return _ref.apply(this, arguments);
		};
	}());
});