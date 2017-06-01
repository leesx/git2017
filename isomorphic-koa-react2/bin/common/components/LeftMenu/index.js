'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _menu2.default.SubMenu;
var MenuItemGroup = _menu2.default.ItemGroup;
var Header = _layout2.default.Header,
    Sider = _layout2.default.Sider,
    Content = _layout2.default.Content;

var LeftMenu = function (_Component) {
	_inherits(LeftMenu, _Component);

	function LeftMenu(props) {
		_classCallCheck(this, LeftMenu);

		var _this = _possibleConstructorReturn(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this, props));

		_this.state = _defineProperty({
			collapsed: false,
			mode: 'inline'
		}, 'collapsed', false);
		return _this;
	}

	_createClass(LeftMenu, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					Sider,
					{
						trigger: null,
						collapsible: true,
						collapsed: this.state.collapsed
					},
					_react2.default.createElement(
						_menu2.default,
						{
							theme: 'dark',
							mode: this.state.mode,
							defaultSelectedKeys: ['1'],
							defaultOpenKeys: ['sub1']
						},
						_react2.default.createElement(
							SubMenu,
							{
								key: 'sub1',
								title: _react2.default.createElement(
									'span',
									null,
									_react2.default.createElement(_icon2.default, { type: 'user' }),
									_react2.default.createElement(
										'span',
										{ className: 'nav-text' },
										'\u62A5\u8868'
									)
								)
							},
							_react2.default.createElement(
								_menu2.default.Item,
								{ key: '1' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/billreport?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51' },
									'\u7EFC\u5408\u8425\u4E1A\u62A5\u8868'
								)
							),
							_react2.default.createElement(
								_menu2.default.Item,
								{ key: '2' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/billreport?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51' },
									'\u8D26\u5355\u67E5\u8BE2'
								)
							),
							_react2.default.createElement(
								_menu2.default.Item,
								{ key: '3' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/foodDetailedQuery?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51' },
									'\u83DC\u54C1\u660E\u7EC6\u67E5\u8BE2'
								)
							),
							_react2.default.createElement(
								_menu2.default.Item,
								{ key: '4' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/duringAnalysis?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51' },
									'\u65F6\u6BB5\u62A5\u8868'
								)
							),
							_react2.default.createElement(
								_menu2.default.Item,
								{ key: '5' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/dailyReport?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51' },
									'\u7EFC\u5408\u8425\u4E1A\u65E5\u62A5\u8868'
								)
							),
							_react2.default.createElement(
								_menu2.default.Item,
								{ key: '6' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/shiftLog?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51' },
									'\u73ED\u7ED3\u65E5\u5FD7'
								)
							),
							_react2.default.createElement(
								_menu2.default.Item,
								{ key: '7' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/operationLogCom?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51' },
									'\u64CD\u4F5C\u65E5\u5FD7'
								)
							),
							_react2.default.createElement(
								_menu2.default.Item,
								{ key: '8' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/currentOperatingState?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51' },
									'\u5F53\u524D\u8425\u4E1A\u6570\u636E'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return LeftMenu;
}(_react.Component);

exports.default = LeftMenu;