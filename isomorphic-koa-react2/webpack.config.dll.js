const webpack = require('webpack')
const path = require('path')

const vendors = [
    'react',
    'react-dom',
    'redux',
    'immutable',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux-thunk',
    'isomorphic-fetch',
    'reqwest',
]

var libraryName = 'vendorLibrary';
var __DEV__ = process.env.NODE_ENV !== 'production'
var manifestFileName = __DEV__ ? 'manifest.development.json' : 'manifest.production.json'

var config = {
    entry: {
        vendor: vendors,
    },
    output: {
        path: 'static/scripts/common',
        filename: '[name].js',
        library: libraryName,
    },

    //   module: {
    //     noParse: [/src/],
    //     root: path.resolve('.'),
    //     modulesDirectories: ['node_modules'],
    //   },
    plugins: [
        new webpack.DllPlugin({
            path: manifestFileName,
            name: libraryName,
            context: __dirname,
        })
    ],
    devtool: 'source-map',
};

if (__DEV__ === false) {
  config.output.filename = 'vendor.min.js';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false,
    },
    compress: {
      warnings: false
    }
  }));
}

module.exports = config
