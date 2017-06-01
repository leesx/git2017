import fetch from 'isomorphic-fetch';
import queryString from 'query-string'
import {message} from 'antd'
/**
 * 生成 x-www-form-urlencoded 所需的参数
 * @param  {Object} opts 传入的参数对象
 * @return [String]       生成如下格式: `name=jack&age=12`
 */
function generateXWWWFormUrlencodedParams(opts = {}) {
	if (!(opts instanceof Object || typeof opts === 'object')) {
		throw new Error(`'opts' must be type of 'object'.`);
	}
	//获取url中的accessToken 参数
	const searchParams = queryString.parse(window.location.search)
	//生成traceID
	const traceID = parseInt(100000000000 * Math.random())
	const combOpts = Object.assign({},opts, {traceID}, searchParams)
	let params = Object
		.keys(combOpts)
		.filter((key) => {
			return !(null == combOpts[key] || undefined == combOpts[key])
		})
		.map((key) => {
			let value = combOpts[key];
			if (value instanceof Object || typeof value === 'object') {
				value = JSON.stringify(value);
			}
			return encodeURIComponent(key) + '=' + encodeURIComponent(value)
		})
		.join('&');
	return params;
}
/**
 * 封装fetch方法
 * @param  {Object} [options={	method: 'GET']        [description]
 * @param  {[type]} data               [description]
 * @return [type]                      [description]
 */
export default function fetchData(options = {
	method: 'GET'
}) {
	if (!(options instanceof Object || 'object' === typeof options)) {
		throw new Error(`'options' must be typeof 'object'`)
	}
	return new Promise((resolve, reject) => {
		fetch(options.url, {
			method: options.method,
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
			credentials: 'include',
			body: generateXWWWFormUrlencodedParams(options.data)
		}).then((response) => {
			if (response.status >= 200 && response.status < 300) {
				return response.json();
			} else {
				const error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
		}).then((json) => {
			if (json.success === 'false') {
				if (json.code || json.msg)
					message.error(`错误代码:${json.code},错误信息:${json.msg}`,3)
				reject({code: json.code, msg: json.msg});
			} else {
				resolve(json);
			}
		}).catch(error => {
			reject(error);
		});
	})
}
//扩展Promise
Promise.prototype.finally = function (callback) {
	let P = this.constructor;
	return this.then(value => P.resolve(callback()).then(() => value), reason => P.resolve(callback()).then(() => {
		throw reason
	}));
};
