"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoMatch = function NoMatch(_ref) {
	var location = _ref.location,
	    match = _ref.match;

	console.log(location, match);
	return _react2.default.createElement(
		"div",
		{ className: "no-match-page" },
		_react2.default.createElement(
			"h1",
			null,
			"404\u627E\u4E0D\u5230"
		),
		_react2.default.createElement(
			"p",
			null,
			"Sorry,I am mising!,\u256E(\u256F\u25BD\u2570)\u256D"
		)
	);
}; /**
    * Created by leesx on 2017/3/12.
    */
exports.default = NoMatch;