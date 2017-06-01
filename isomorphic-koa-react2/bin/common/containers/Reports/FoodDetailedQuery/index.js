'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pagination = require('antd/lib/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

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

var Search = _input2.default.Search;

var columns = [{
	title: '详情',
	children: [{
		"title": "账单号",
		"dataIndex": "saasOrderKey",
		"key": "saasOrderKey",
		"width": 200
	}, {
		"title": "台牌号",
		"dataIndex": "tableName",
		"key": "tableName",
		"width": 100
	}, {
		"title": "日期",
		"dataIndex": "createTime",
		"key": "createTime",
		"width": 150
	}, {
		"title": "分类",
		"dataIndex": "foodCategoryName",
		"key": "foodCategoryName",
		"width": 100
	}, {
		"title": "品名",
		"dataIndex": "foodName",
		"key": "foodName",
		"width": 100
	}, {
		"title": "规格",
		"dataIndex": "unit",
		"key": "unit",
		"width": 100
	}]
}, {
	title: '点菜',
	children: [{
		"title": "人员",
		"dataIndex": "orderBy",
		"key": "orderBy",
		"width": 100
	}, {
		"title": "数量",
		"dataIndex": "foodNumber",
		"key": "foodNumber",
		"width": 100
	}, {
		"title": "时间",
		"dataIndex": "orderTime",
		"key": "orderTime",
		"width": 100
	}]
}, {
	title: '退菜',
	children: [{
		"title": "人员",
		"dataIndex": "cancelBy",
		"key": "cancelBy",
		"width": 100
	}, {
		"title": "数量",
		"dataIndex": "foodCancelNumber",
		"key": "foodCancelNumber",
		"width": 100
	}, {
		"title": "时间",
		"dataIndex": "cancelTime",
		"key": "cancelTime",
		"width": 100
	}, {
		"title": "原因",
		"dataIndex": "cancelReason",
		"key": "cancelReason",
		"width": 200
	}]
}, {
	title: '增菜',
	children: [{
		"title": "人员",
		"dataIndex": "sendBy",
		"key": "sendBy",
		"width": 100
	}, {
		"title": "数量",
		"dataIndex": "foodSendNumber",
		"key": "foodSendNumber",
		"width": 100
	}, {
		"title": "时间",
		"dataIndex": "sendTime",
		"key": "sendTime",
		"width": 100
	}, {
		"title": "原因",
		"dataIndex": "sendReason",
		"key": "sendReason",
		"width": 200
	}]
}, {
	title: '其他',
	children: [{
		"title": "临时菜",
		"dataIndex": "isTempFood",
		"key": "isTempFood",
		"width": 100
	}, {
		"title": "套餐标记",
		"dataIndex": "isSetFood",
		"key": "isSetFood",
		"width": 100
	}, {
		"title": "套餐名",
		"dataIndex": "setFoodName",
		"key": "setFoodName",
		"width": 100
	}, {
		"title": "要求",
		"dataIndex": "setFoodRemark",
		"key": "setFoodRemark",
		"width": 240
	}]
}];

var FoodDetailedQuery = function (_React$Component) {
	_inherits(FoodDetailedQuery, _React$Component);

	function FoodDetailedQuery(props) {
		_classCallCheck(this, FoodDetailedQuery);

		var _this = _possibleConstructorReturn(this, (FoodDetailedQuery.__proto__ || Object.getPrototypeOf(FoodDetailedQuery)).call(this, props));

		_this.refreshKeyword = function (name) {
			_this.setState({ "keyword": name });
		};

		_this.refreshFoodCategory = function (value) {
			_this.setState({ "foodCategoryNameLst": value });
		};

		_this.refreshFoodAlert = function (value) {
			_this.setState({ "foodAlert": value });
		};

		_this.refreshState = function (rsp) {
			if (rsp.code == "000") {
				var total = rsp.data.recordCount * 1;
				var dataSource = rsp.data.records;
				_this.setState(_extends(_this.state.tableDataSource, {
					total: total,
					dataSource: dataSource
				}));
			}
		};

		_this.updateDateTime = function (startOrEnd, dateAndTime) {
			var dateField = startOrEnd == "start" ? 'startDateTime' : 'endDateTime';
			_this.setState(_defineProperty({}, dateField, _helpers.DateUtils.newDateTime(dateAndTime)));
		};

		_this.handleChangePagination = function (current) {
			_this.setState(_extends(_this.state.tableDataSource, {
				current: current
			}));
			_this.handleSearch();
		};

		_this.handleChangeSearch = function (e) {
			var foodName = e.target.value.trim();
			_this.setState({ foodName: foodName });
		};

		_this.searchClick = function () {
			_this.setState(_extends(_this.state.tableDataSource, {
				current: 1
			}));
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
			    foodAlert = _this$state.foodAlert,
			    foodCategoryNameLst = _this$state.foodCategoryNameLst,
			    foodName = _this$state.foodName,
			    startDateTime = _this$state.startDateTime,
			    endDateTime = _this$state.endDateTime;

			var dateTime = {
				startDateTime: _helpers.DateUtils.transformString(_helpers.DateUtils.transformToValueGroups(startDateTime)),
				endDateTime: _helpers.DateUtils.transformString(_helpers.DateUtils.transformToValueGroups(endDateTime))
			};
			var _this$state$tableData = _this.state.tableDataSource,
			    pageSize = _this$state$tableData.pageSize,
			    current = _this$state$tableData.current;


			var diffTime = startDateTime.getTime() - endDateTime.getTime();
			if (diffTime > 0) {
				_message2.default.warn('开始时间必须小于结束时间,请重新选择', 3);
				return false;
			}

			_this.showLoading();
			//发起ajax请求
			(0, _helpers.fetchData)({
				url: "/saas/order/queryFoodDetailReport.ajax",
				method: "POST",
				data: _extends({
					foodAlert: foodAlert,
					foodCategoryName: foodCategoryNameLst,
					foodName: foodName
				}, dateTime, {
					// startDateTime,
					// endDateTime,
					pageNo: current,
					pageSize: pageSize
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
			keyword: "",
			startDateTime: new Date(),
			endDateTime: new Date(),
			tableDataSource: {
				current: 1,
				pageSize: 15,
				total: 0, //总共数据条数
				dataSource: [] },
			foodCategoryNameLst: "全部",
			foodName: "",
			foodAlert: "",
			isLoadingShow: true
		};
		_this.handleSearch();
		_this.refreshTextInput = _this.refreshTextInput.bind(_this);
		return _this;
	}

	_createClass(FoodDetailedQuery, [{
		key: 'refreshTextInput',
		value: function refreshTextInput(value) {
			var _this2 = this;

			var foodName = value.trim();
			if (!foodName) return;
			this.setState({ foodName: foodName }, function () {
				_this2.handleSearch();
			});
		}
		//更新日期时间

		//更新页码


		//点击查询按钮

		//弹出加载动画

		//隐藏加载动画

		//查询结果

	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    startDateTime = _state.startDateTime,
			    endDateTime = _state.endDateTime;
			var _state$tableDataSourc = this.state.tableDataSource,
			    dataSource = _state$tableDataSourc.dataSource,
			    scrollX = _state$tableDataSourc.scrollX,
			    current = _state$tableDataSourc.current,
			    total = _state$tableDataSourc.total,
			    pageSize = _state$tableDataSourc.pageSize;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'query-pan' },
					_react2.default.createElement(
						_row2.default,
						null,
						_react2.default.createElement(
							_col2.default,
							{ xs: 24, md: 12 },
							_react2.default.createElement(
								'div',
								{ className: 'query-pan-item' },
								_react2.default.createElement(_Pickers.DateTimePicker, { updateDateTime: this.updateDateTime, date: startDateTime, startOrEnd: 'start' }),
								_react2.default.createElement(_icon2.default, { type: 'minus', className: 'icon-spliter' }),
								_react2.default.createElement(_Pickers.DateTimePicker, { updateDateTime: this.updateDateTime, date: endDateTime, startOrEnd: 'end' })
							)
						),
						_react2.default.createElement(
							_col2.default,
							{ xs: 8, md: 4 },
							_react2.default.createElement(_Pickers.FoodMarkPicker, { refreshFoodAlert: this.refreshFoodAlert })
						),
						_react2.default.createElement(
							_col2.default,
							{ xs: 8, md: 4 },
							_react2.default.createElement(_Pickers.FoodCategoryPicker, { refreshFoodCategory: this.refreshFoodCategory })
						)
					),
					_react2.default.createElement(
						_row2.default,
						{ style: { marginTop: 10 } },
						_react2.default.createElement(
							_col2.default,
							null,
							_react2.default.createElement(Search, {
								style: { width: 200, marginRight: 10 },
								onSearch: this.refreshTextInput,
								onChange: this.handleChangeSearch,
								placeholder: '\u8BF7\u8F93\u5165\u83DC\u54C1\u540D\u79F0'
							}),
							_react2.default.createElement(
								_button2.default,
								{ type: 'primary', onClick: this.searchClick },
								'\u67E5\u8BE2'
							)
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
					}),
					dataSource && dataSource.length ? _react2.default.createElement(_pagination2.default, {
						total: total,
						showTotal: function showTotal(total, range) {
							return '\u5F53\u524D' + current + '/' + Math.ceil(total / pageSize) + '\u9875,\u6BCF\u9875\u663E\u793A' + pageSize + '\u6761,\u5171 ' + total + ' \u6761';
						},
						pageSize: pageSize,
						onChange: this.handleChangePagination,
						defaultCurrent: 1,
						current: current
					}) : null
				),
				_react2.default.createElement(_Loading2.default, { isLoadingShow: this.state.isLoadingShow })
			);
		}
	}]);

	return FoodDetailedQuery;
}(_react2.default.Component);

exports.default = FoodDetailedQuery;