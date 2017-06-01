import React from 'react'
import Router from 'koa-router'
import fetch from 'isomorphic-fetch'
import querystring from 'querystring'
import env from './../env'
import { logger } from '../../common/helpers/utils.js'

// 接口服务器地址
const connectServer = {
    protocol: 'http://',
    host: env.API_SERVICE_BASEURL,
    port: '',
};
const serverDomainProtocol = connectServer.protocol
const serverDomainHost = connectServer.host
const serverDomainPort = connectServer.port
const serverDomain = `${serverDomainProtocol}${serverDomainHost}`


const router = Router()
export default router
// import multer from 'koa-router-multer';
//import user from './user'
//user(router)
// import supportchain from './supplyChain';
// supportchain(router);

router.get('*', function (ctx) {
	const pageInfo = {
		title: '云pad',
		keywords: '哗啦啦,门店宝,点餐',
		description: '智能餐饮管理系统,餐饮移动互联网时代引领者.',
	}
	ctx.render(pageInfo)
})


const URLLIST = ['/saas/order/*']

URLLIST.forEach((URL) => {
	router.all(URL, async function (ctx) {

		logger("------------------------------")

		const { req, res, request, response, query, method } = ctx
		const reqUrl = `${serverDomain}${req.url}`
    logger('[POST Request]:>>>>>>>>>>', reqUrl);
    const reqContentType = req.headers['content-type'];
    const reqBody = method === 'GET' ? query : ctx.request.body;

    // 根据 请求的 content-type 判断用哪种格式化方式
    const reqData = reqContentType.indexOf('json') !== -1 ? JSON.stringify(reqBody) : querystring.stringify(reqBody);
		logger(`请求参数:${reqData}`)
		const headers = {
			'content-type': reqContentType,
			origin: 'koa2 server',
			cookie: req.headers.cookie
		}
		const options = {
			method: req.method,
			headers,
			body: reqData,
			credentials: 'include',//加上cookie信息
		}
		logger(reqUrl,options);
		await fetch(reqUrl, options)
			.then((response)=>{
				// TODO: 未完成：完善合理的接口返回
				switch (response.status) {
					case 200:
						ctx.body = response.body;
						ctx.type = reqContentType;
						break

					case 404:
						ctx.body = { code: 404 }
						break

					default:
						ctx.body = {
							code: 500,
							msg:response.statusText,
							success:'false',
						}
						break
				}
			},(e)=>{
				ctx.body = {
					code: 500,
					error: e.message
				}
			})
	})

})
