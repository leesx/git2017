'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./../components/common/App.js');

var _App2 = _interopRequireDefault(_App);

var _NoMatch = require('./../components/common/NoMatch.js');

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _SplitRouter = require('./SplitRouter');

var SplitRouter = _interopRequireWildcard(_SplitRouter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
	_reactRouter.Router,
	{ history: _reactRouter.browserHistory },
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _App2.default },
		_react2.default.createElement(_reactRouter.Route, { path: '/billreport', getComponent: SplitRouter.billReport }),
		_react2.default.createElement(_reactRouter.Route, { path: '/billreport', getComponent: SplitRouter.billReport }),
		_react2.default.createElement(_reactRouter.Route, { path: '/currentOperatingState', getComponent: SplitRouter.currentOperatingState }),
		_react2.default.createElement(_reactRouter.Route, { path: '/operationLogCom', getComponent: SplitRouter.operationLogCom }),
		_react2.default.createElement(_reactRouter.Route, { path: '/dailyReport', getComponent: SplitRouter.dailyReport }),
		_react2.default.createElement(_reactRouter.Route, { path: '/foodDetailedQuery', getComponent: SplitRouter.foodDetailedQuery }),
		_react2.default.createElement(_reactRouter.Route, { path: '/duringAnalysis', getComponent: SplitRouter.duringAnalysis }),
		_react2.default.createElement(_reactRouter.Route, { path: '/shiftLog', getComponent: SplitRouter.shiftLog }),
		_react2.default.createElement(_reactRouter.Route, { path: '*', component: _NoMatch2.default })
	)
);
//import Demo from 'components/__demo';