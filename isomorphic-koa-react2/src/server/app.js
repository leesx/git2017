/**
 * 注意了....
 * 当前Koa version ^2.0.0 配套的koa-router需要在^7.0.0
 */
import Koa from 'koa'
import serve from 'koa-static'
import path from 'path'
import logger from 'koa-logger'
//import multer from 'koa-multer'
import bodyParser from 'koa-bodyparser'
import viewhook from './middlewares/viewhook'
import matchRoute from './middlewares/matchRoute'
import router from './controllers'
//import routes from './../common/routes'
import env from './env'
import fs from 'fs'

const app = new Koa()

app.use(logger())
  .use(bodyParser())
  .use(viewhook())
  .use(matchRoute())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve(path.join(process.cwd(), 'static')))
  .listen(env.NODE_SERVER_PORT)


console.log(`listening on port ${env.NODE_SERVER_PORT} -- ${process.env.NODE_ENV}`)
