'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = fetchData;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 生成 x-www-form-urlencoded 所需的参数
 * @param  {Object} opts 传入的参数对象
 * @return [String]       生成如下格式: `name=jack&age=12`
 */
function generateXWWWFormUrlencodedParams() {
	var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (!(opts instanceof Object || (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object')) {
		throw new Error('\'opts\' must be type of \'object\'.');
	}
	//获取url中的accessToken 参数
	var searchParams = _queryString2.default.parse(window.location.search);
	//生成traceID
	var traceID = parseInt(100000000000 * Math.random());
	var combOpts = _extends({}, opts, { traceID: traceID }, searchParams);
	var params = Object.keys(combOpts).filter(function (key) {
		return !(null == combOpts[key] || undefined == combOpts[key]);
	}).map(function (key) {
		var value = combOpts[key];
		if (value instanceof Object || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
			value = JSON.stringify(value);
		}
		return encodeURIComponent(key) + '=' + encodeURIComponent(value);
	}).join('&');
	return params;
}
/**
 * 封装fetch方法
 * @param  {Object} [options={	method: 'GET']        [description]
 * @param  {[type]} data               [description]
 * @return [type]                      [description]
 */
function fetchData() {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		method: 'GET'
	};

	if (!(options instanceof Object || 'object' === (typeof options === 'undefined' ? 'undefined' : _typeof(options)))) {
		throw new Error('\'options\' must be typeof \'object\'');
	}
	return new Promise(function (resolve, reject) {
		(0, _isomorphicFetch2.default)(options.url, {
			method: options.method,
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
			credentials: 'include',
			body: generateXWWWFormUrlencodedParams(options.data)
		}).then(function (response) {
			if (response.status >= 200 && response.status < 300) {
				return response.json();
			} else {
				var error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
		}).then(function (json) {
			if (json.success === 'false') {
				if (json.code || json.msg) _message2.default.error('\u9519\u8BEF\u4EE3\u7801:' + json.code + ',\u9519\u8BEF\u4FE1\u606F:' + json.msg, 3);
				reject({ code: json.code, msg: json.msg });
			} else {
				resolve(json);
			}
		}).catch(function (error) {
			reject(error);
		});
	});
}
//扩展Promise
Promise.prototype.finally = function (callback) {
	var P = this.constructor;
	return this.then(function (value) {
		return P.resolve(callback()).then(function () {
			return value;
		});
	}, function (reason) {
		return P.resolve(callback()).then(function () {
			throw reason;
		});
	});
};