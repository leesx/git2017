/**
 * webpack version "^1.14.0"
 * 注意:该版本不能完全编译es6语法
 * eg. import export
 */
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
//const babelpolyfill = require("babel-polyfill")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('[name]-[contenthash:8].css')
const moment = require('moment')
const autoprefixer = require('autoprefixer')

const nowDateStr = moment().format("YYYY-MM-DD HH:mm:ss")

//修改antd.design主题文件
const theme = require('./theme.config.js')

module.exports = {
    entry:{
      index:'./src/client/index.js'
    } ,
    output: {
				comments: false,
        publicPath: 'http://api.mendianbao.hualala.com',
				//path:path.join(__dirname, './'),
        filename: "static/scripts/[name].min.js",   //打包后输出index.js
        chunkFilename: 'static/scripts/page/[id].[name].chunk.js', // 按需加载的页面模块
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        alias: {
					assets:path.resolve(__dirname,'src/common/assets'),
					actions: path.resolve(__dirname, 'src/common/actions'),
					components: path.resolve(__dirname, 'src/common/components'),
					containers: path.resolve(__dirname, 'src/common/containers'),
					reducers: path.resolve(__dirname, 'src/common/reducers'),
					store: path.resolve(__dirname, 'src/common/store'),
					routes: path.resolve(__dirname, 'src/common/routes'),
					helpers: path.resolve(__dirname, 'src/common/helpers'),
        },
    },
    module: {
        // loader 并列用! 设置参数用 ?
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel', //-> babel-loader
            exclude: /node_modules/,
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url', // -> url-loader
        }, {
            test: /\.(less)$/,
            //loaders:extractCSS.extract(['css!px2rem!postcss!less']),
            loader:ExtractTextPlugin.extract('style',`css!postcss!less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`)
        },
        {
          test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
          loader: 'url?limit=50000&name=[path][name].[ext]'
        },
         {
            test: /\.(css)$/,
            loaders: ['style', 'css'],
        }]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
						'process.env.__CLIENT__': 'true',
        }),
				new webpack.optimize.UglifyJsPlugin({
		      output: {
		        comments: false,
		      },
		      compress: {
		        warnings: false
		      }
		    }),
        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require('./manifest.production.json'),
        }),
        new ExtractTextPlugin("static/styles/default/[name].min.css", { allChunks: true }),
        new webpack.BannerPlugin(`©Copyright Leesx inc. \n update: ${nowDateStr}`)
    ]
};
