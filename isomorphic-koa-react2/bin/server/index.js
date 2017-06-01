'use strict';

require('source-map-support').install();
//require('babel-polyfill');
require('babel-register')({
  sourceMaps: true,
  plugins: ["transform-runtime"],
  extensions: ['.js', '.jsx'],
  presets: ['react', 'stage-3']
});
require('./app');