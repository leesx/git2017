import invariant from 'invariant'
import env from './../../env'


const baseUrl = env.ASSETS_SERVICE_BASEURL
const suffix = env.HTTP_SCRIPT_SUFFIX
const nodeServerPort = env.HTTP_SERVER_PORT

export default function html(pageInfo, content, initialState) {

    return `
    <!doctype html>
    <html>
      <head>
        <title>${pageInfo.title}</title>
				<meta charset="utf-8" />
				<meta name="keywords" content="${pageInfo.keywords}" />
				<meta name="description"  content="${pageInfo.description}" />
				<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
		    <meta content="yes" name="apple-mobile-web-app-capable" />
		    <meta content="yes" name="apple-touch-fullscreen" />
		    <meta content="telephone=no,email=no" name="format-detection" />
		    <meta content="maximum-dpr=2" name="flexible" />
		    <meta content="modeName=750-12" name="grid" />
				<link rel="stylesheet" href="${baseUrl}/static/styles/bootstrap/dist/css/bootstrap${suffix}.css" />
      </head>
      <body>
        ${content}
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>

        <script src="${baseUrl}/static/scripts/common/vendor${suffix}.js"></script>
        <script src="${baseUrl}/static/scripts/index${suffix}.js"></script>

      </body>
    </html>
    `
}
