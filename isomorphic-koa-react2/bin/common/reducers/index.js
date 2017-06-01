'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var rootReducer = (0, _redux.combineReducers)({
    routing: _reactRouterRedux.routerReducer
});
exports.default = rootReducer;