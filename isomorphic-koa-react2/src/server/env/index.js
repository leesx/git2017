
const ASSETS_SERVICE_BASEURL = process.env.NODE_ENV === 'production' ?
  'http://api.leesx.com' :
  'http://127.0.0.1:3031'


const API_SERVICE_BASEURL = process.env.NODE_ENV === 'production' ?
  'api.leesx.com' :
  'dev.api.leesx.com'

const env = {
  HTTP_SCRIPT_SUFFIX: process.env.NODE_ENV === 'production' ? '.min' : '',

  // nodejs 服务端口
  NODE_SERVER_PORT: 3032,
  ASSETS_SERVICE_BASEURL,
  API_SERVICE_BASEURL,
}

export default env
