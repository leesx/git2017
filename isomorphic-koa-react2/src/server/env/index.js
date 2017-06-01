// 静态文件根路径
const ASSETS_SERVICE_BASEURL = process.env.NODE_ENV === 'production' ?
  'http://api.mendianbao.hualala.com' :
  'http://127.0.0.1:3031'

//API接口服务器
const API_SERVICE_BASEURL = process.env.NODE_ENV === 'production' ?
  'api.mendianbao.hualala.com' :
  'dohko.api.mendianbao.hualala.com'

const env = {
  //脚本.min后缀
  HTTP_SCRIPT_SUFFIX: process.env.NODE_ENV === 'production' ? '.min' : '',

  // nodejs 服务端口
  NODE_SERVER_PORT: 3032,
  ASSETS_SERVICE_BASEURL,
  API_SERVICE_BASEURL,
}

export default env
