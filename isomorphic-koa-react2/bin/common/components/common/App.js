'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LeftMenu = require('./../LeftMenu');

var _LeftMenu2 = _interopRequireDefault(_LeftMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//px 转化为rem
if (process.env.__CLIENT__ === true) {
	(function (window, document) {
		function init() {
			var w = document.documentElement.clientWidth || document.body.clientWidth;
			if (w <= 640) w = 640;
			document.documentElement.style.fontSize = w / 10 + 'px';
		}
		init();
		window.onresize = function () {
			window.requestAnimationFrame(init);
		};
	})(window, document);
}

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.handleToggleMenu = function () {
			_this.setState({
				flag: !_this.state.flag
			});
		};

		_this.state = {
			flag: false
		};
		return _this;
	}

	_createClass(App, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			if (this.props.location !== prevProps.location) {
				window.scrollTo(0, 0);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main-layout' },
				_react2.default.createElement(
					'div',
					{ className: 'left-menu', style: { width: this.state.flag ? 200 : 0 } },
					_react2.default.createElement(_LeftMenu2.default, { toggle: this.state.flag })
				),
				_react2.default.createElement(
					'div',
					{ className: 'right-layout' },
					_react2.default.createElement(
						'div',
						{ className: 'switch-menu' },
						_react2.default.createElement(_icon2.default, { type: this.state.flag ? "menu-fold" : "menu-unfold", onClick: this.handleToggleMenu })
					),
					this.props.children
				)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;