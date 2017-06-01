'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Pickers = require('components/Pickers');

var _Loading = require('components/common/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _helpers = require('helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var columns = [];

var DuringAnalysis = function (_React$Component) {
	_inherits(DuringAnalysis, _React$Component);

	function DuringAnalysis(props) {
		_classCallCheck(this, DuringAnalysis);

		var _this = _possibleConstructorReturn(this, (DuringAnalysis.__proto__ || Object.getPrototypeOf(DuringAnalysis)).call(this, props));

		_this.refreshState = function (rsp) {
			if (rsp.code == "000") {
				if (rsp.data.records.length) {
					var columnsData = rsp.data.records[0].row;
					columns = (0, _helpers.transColumnsData)(columnsData);
					//修改columns 指定字段的宽度
					(0, _helpers.mergeColumnsWidth)(columns, { 'billreport_0': 200 });
					var dataSource = (0, _helpers.transTableDataSource)(rsp.data.records.slice(1));
					_this.setState(_extends(_this.state.tableDataSource, {
						dataSource: dataSource
					}));
				}
			}
		};

		_this.updateDateTime = function (startOrEnd, dateAndTime) {
			var dateField = startOrEnd == "start" ? 'startDate' : 'endDate';
			_this.setState(_defineProperty({}, dateField, _helpers.DateUtils.newDateNoTime(dateAndTime)));
		};

		_this.searchClick = function () {
			_this.handleSearch();
		};

		_this.showLoading = function () {
			if (!_this.state.isLoadingShow) {
				_this.setState({ isLoadingShow: true });
			}
		};

		_this.hiddenLoading = function () {
			if (_this.state.isLoadingShow) {
				_this.setState({ isLoadingShow: false });
			}
		};

		_this.handleSearch = function () {
			var _this$state = _this.state,
			    chkbox = _this$state.chkbox,
			    startDate = _this$state.startDate,
			    endDate = _this$state.endDate;

			var date = {
				startDate: _helpers.DateUtils.transformString(_helpers.DateUtils.toValueGroupsNoTime(startDate)),
				endDate: _helpers.DateUtils.transformString(_helpers.DateUtils.toValueGroupsNoTime(endDate))
			};
			chkbox = chkbox == true ? 1 : 0;
			var diffTime = startDate.getTime() - endDate.getTime();
			if (diffTime > 0) {
				_message2.default.warn('开始时间必须小于结束时间,请重新选择', 3);
				return false;
			}
			_this.showLoading();
			//发起ajax请求
			(0, _helpers.fetchData)({
				url: "/saas/order/queryTimeReport.ajax",
				method: "POST",
				data: _extends({}, date, {
					isShowPro: chkbox
				})
			}).then(function (rsp) {
				_this.refreshState(rsp);
			}).catch(function (error) {
				console.error(error);
			}).finally(function () {
				_this.hiddenLoading();
			});
		};

		_this.state = {
			startDate: new Date(),
			endDate: new Date(),
			tableDataSource: {
				dataSource: [] },
			chkbox: true,
			isLoadingShow: true
		};
		_this.handleSearch();
		_this.clickCheckbox = _this.clickCheckbox.bind(_this);
		return _this;
	}
	//更新日期时间

	//点击查询按钮


	_createClass(DuringAnalysis, [{
		key: 'clickCheckbox',

		//点击统计占比
		value: function clickCheckbox(e) {
			var _this2 = this;

			this.setState({
				chkbox: e.target.checked
			}, function () {
				_this2.handleSearch();
			});
		}
		//弹出加载动画

		//隐藏加载动画

		//查询结果

	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    startDate = _state.startDate,
			    endDate = _state.endDate;
			var dataSource = this.state.tableDataSource.dataSource;


			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_row2.default,
					{ className: 'query-pan' },
					_react2.default.createElement(
						_col2.default,
						{ xs: 24, md: 8 },
						_react2.default.createElement(
							'div',
							{ className: 'query-pan-item' },
							_react2.default.createElement(_Pickers.DatePicker, { updateDateTime: this.updateDateTime, date: startDate, startOrEnd: 'start' }),
							_react2.default.createElement(_icon2.default, { type: 'minus', className: 'icon-spliter' }),
							_react2.default.createElement(_Pickers.DatePicker, { updateDateTime: this.updateDateTime, date: startDate, startOrEnd: 'end' })
						)
					),
					_react2.default.createElement(
						_col2.default,
						{ xs: 12, md: 8 },
						_react2.default.createElement(
							_checkbox2.default,
							{ onChange: this.clickCheckbox },
							'\u7EDF\u8BA1\u5360\u6BD4'
						),
						_react2.default.createElement(
							_button2.default,
							{ type: 'primary', onClick: this.searchClick },
							'\u67E5\u8BE2'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'yunpad-table' },
					_react2.default.createElement(_table2.default, {
						columns: columns,
						dataSource: dataSource,
						bordered: true,
						pagination: false,
						scroll: { x: '120%', y: 400 }
					})
				),
				_react2.default.createElement(_Loading2.default, { isLoadingShow: this.state.isLoadingShow })
			);
		}
	}]);

	return DuringAnalysis;
}(_react2.default.Component);

exports.default = DuringAnalysis;