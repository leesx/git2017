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

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

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

var CheckboxGroup = _checkbox2.default.Group;
var Search = _input2.default.Search;
var checkBoxOptions = [{ label: '反结账', value: 'FJZ' }, { label: '预结账', value: 'YJZ' }, { label: '金额异常', value: 'JEYC' }, { label: '测试单', value: 'CSD' }, { label: '含退菜', value: 'TC' }, { label: '含增菜', value: 'ZC' }, { label: '有改价', value: 'GJ' }, { label: '有临时菜', value: 'LSC' }, { label: '有临时套餐', value: 'LSTC' }];

var columns = [];

var BillReport = function (_Component) {
	_inherits(BillReport, _Component);

	function BillReport(props) {
		_classCallCheck(this, BillReport);

		var _this = _possibleConstructorReturn(this, (BillReport.__proto__ || Object.getPrototypeOf(BillReport)).call(this, props));

		_this.getSiteInfo = function () {
			_helpers.SiteInfo.getSiteInfo(function () {
				_this.setState({ reportDictionaryDate: _helpers.SiteInfo.info });
			});
		};

		_this.refreshKeyword = function (name) {
			_this.setState({ keyword: name });
		};

		_this.refreshCashier = function (value) {
			_this.setState({ cashier: value });
		};

		_this.refreshBillStatus = function (value) {
			_this.setState({ orderStatus: value });
		};

		_this.refreshBillCategory = function (value) {
			_this.setState({ orderSubType: value });
		};

		_this.refreshChannel = function (value) {
			_this.setState({ channelName: value });
		};

		_this.refreshTimeName = function (value) {
			_this.setState({ timeName: value });
		};

		_this.refreshAreaName = function (value) {
			_this.setState({ areaName: value });
		};

		_this.refreshPayType = function (value) {
			_this.setState({ payName: value });
		};

		_this.refreshState = function (rsp) {

			if (rsp.code == "000") {
				var total = rsp.data.recordCount * 1;
				if (rsp.data.records.length) {
					var columnsData = rsp.data.records[0].row;

					columns = (0, _helpers.transColumnsData)(columnsData);
					(0, _helpers.mergeColumnsWidth)(columns, {
						'billreport_1': 200,
						'billreport_14': 300,
						'billreport_35': 200,
						'billreport_52': 300
					});
					var dataSource = (0, _helpers.transTableDataSource)(rsp.data.records.slice(1));
					_this.setState(_extends(_this.state.tableDataSource, {
						total: total,
						dataSource: dataSource
					}));
				}
			}
		};

		_this.handleChangeSearch = function (e) {
			var foodName = e.target.value.trim();
			_this.setState({ foodName: foodName });
		};

		_this.refreshCheckbox = function (state) {
			var name = state.name;
			var alertFlag = _this.state.alertFlag;

			if (state.checked) {
				if (!alertFlag.some(function (item) {
					return item == name;
				})) {
					alertFlag.push(name);
				}
			} else {
				var tempAlertFlag = [];
				for (var i = 0; i < alertFlag.length; i++) {
					if (alertFlag[i] != name) {
						tempAlertFlag.push(alertFlag[i]);
					}
				}
				alertFlag = tempAlertFlag;
			}
			_this.setState({ alertFlag: alertFlag });
		};

		_this.updateDateTime = function (startOrEnd, dateAndTime) {
			var dateField = startOrEnd == "start" ? 'startDate' : 'endDate';
			_this.setState(_defineProperty({}, dateField, _helpers.DateUtils.newDateNoTime(dateAndTime)));
		};

		_this.handleChangePagination = function (current) {
			_this.setState(_extends(_this.state.tableDataSource, {
				current: current
			}));
			_this.handleSearch();
		};

		_this.searchClick = function () {
			_this.setState(_extends(_this.state.tableDataSource, {
				current: 1
			}));
			_this.handleSearch();
		};

		_this.showLoading = function (isLoadingShow) {
			_this.setState({ isLoadingShow: isLoadingShow });
		};

		_this.handleSearch = function () {
			var _this$state = _this.state,
			    foodName = _this$state.foodName,
			    cashier = _this$state.cashier,
			    alertFlag = _this$state.alertFlag,
			    orderStatus = _this$state.orderStatus,
			    orderSubType = _this$state.orderSubType,
			    channelName = _this$state.channelName,
			    timeName = _this$state.timeName,
			    areaName = _this$state.areaName,
			    payName = _this$state.payName,
			    startDate = _this$state.startDate,
			    endDate = _this$state.endDate;

			var date = {
				startDate: _helpers.DateUtils.transformString(_helpers.DateUtils.toValueGroupsNoTime(startDate)),
				endDate: _helpers.DateUtils.transformString(_helpers.DateUtils.toValueGroupsNoTime(endDate))
			};
			var _this$state$tableData = _this.state.tableDataSource,
			    pageSize = _this$state$tableData.pageSize,
			    current = _this$state$tableData.current;

			var diffTime = startDate.getTime() - endDate.getTime();

			if (diffTime > 0) {
				_message2.default.warn('开始时间必须小于结束时间,请重新选择', 3);
				return false;
			}
			_this.showLoading(true);
			//发起ajax请求
			(0, _helpers.fetchData)({
				url: "/saas/order/queryorderdetail.ajax",
				method: "POST",
				data: _extends({}, date, {
					checkoutBy: cashier,
					orderStatus: orderStatus,
					orderSubType: orderSubType,
					channelName: channelName,
					timeName: timeName,
					areaName: areaName,
					payName: payName,
					foodName: foodName,
					alertFlag: alertFlag.join(),
					pageNo: current,
					pageSize: pageSize
				})
			}).then(function (rsp) {
				_this.refreshState(rsp);
			}).finally(function () {
				_this.showLoading(false);
			});
		};

		_this.state = {
			cashier: "全部",
			orderStatus: "",
			orderSubType: "",
			channelName: "",
			timeName: "",
			areaName: "",
			payName: "",
			foodAlert: "",
			foodCategoryName: "",
			alertFlag: [],
			keyword: "",
			tableDataSource: {
				current: 1,
				pageSize: 15,
				total: 0, //总共数据条数
				dataSource: [] },
			startDate: new Date(),
			endDate: new Date(),
			foodName: "",
			reportDictionaryDate: {},
			isLoadingShow: false
		};
		_this.getSiteInfo();
		_this.handleSearch();
		_this.handleChangeCheckBox = _this.handleChangeCheckBox.bind(_this);
		_this.refreshTextInput = _this.refreshTextInput.bind(_this);
		return _this;
	}

	_createClass(BillReport, [{
		key: 'refreshTextInput',
		value: function refreshTextInput(value) {
			var _this2 = this;

			this.setState({
				foodName: value
			}, function () {
				_this2.handleSearch();
			});
		}

		// 更新复选框

	}, {
		key: 'handleChangeCheckBox',
		value: function handleChangeCheckBox(checkedValues) {
			this.setState({
				alertFlag: checkedValues
			});
		}

		//更新页码


		//点击查询按钮


		//弹出加载动画


		//查询结果

	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    startDate = _state.startDate,
			    endDate = _state.endDate;
			var _state$tableDataSourc = this.state.tableDataSource,
			    dataSource = _state$tableDataSourc.dataSource,
			    current = _state$tableDataSourc.current,
			    total = _state$tableDataSourc.total,
			    pageSize = _state$tableDataSourc.pageSize;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'query-pan', style: { height: 'auto', paddingBottom: 20 } },
					_react2.default.createElement(
						_row2.default,
						null,
						_react2.default.createElement(
							_col2.default,
							{ xs: 8, md: 4 },
							_react2.default.createElement(
								'div',
								{ className: 'query-pan-item' },
								_react2.default.createElement(_Pickers.DatePicker, {
									updateDateTime: this.updateDateTime,
									date: this.startDate,
									startOrEnd: 'start'
								})
							)
						),
						_react2.default.createElement(
							_col2.default,
							{ xs: 8, md: 4 },
							_react2.default.createElement(
								'div',
								{ className: 'query-pan-item' },
								_react2.default.createElement(_Pickers.DatePicker, {
									updateDateTime: this.updateDateTime,
									date: this.endDate,
									startOrEnd: 'end'
								})
							)
						),
						_react2.default.createElement(
							_col2.default,
							{ xs: 8, md: 4 },
							_react2.default.createElement(_Pickers.CashierPicker, {
								cashierList: this.state.reportDictionaryDate.checkoutByLst,
								refreshCashier: this.refreshCashier
							})
						),
						_react2.default.createElement(
							_col2.default,
							{ xs: 8, md: 4 },
							_react2.default.createElement(_Pickers.BillStatusPicker, { refreshBillStatus: this.refreshBillStatus })
						),
						_react2.default.createElement(
							_col2.default,
							{ xs: 8, md: 4 },
							_react2.default.createElement(_Pickers.BillCategoryPicker, { refreshBillCategory: this.refreshBillCategory })
						),
						_react2.default.createElement(
							_col2.default,
							{ xs: 8, md: 4 },
							_react2.default.createElement(_Pickers.ChannelPicker, {
								channelList: this.state.reportDictionaryDate.channelLst,
								refreshChannel: this.refreshChannel
							})
						),
						_react2.default.createElement(
							_col2.default,
							{ xs: 8, md: 4 },
							_react2.default.createElement(_Pickers.TimeNamePicker, {
								timeNameList: this.state.reportDictionaryDate.timeNameLst,
								refreshTimeName: this.refreshTimeName
							})
						),
						_react2.default.createElement(
							_col2.default,
							{ xs: 8, md: 4 },
							_react2.default.createElement(_Pickers.AreaNamePicker, {
								areaNameList: this.state.reportDictionaryDate.areaLst,
								refreshAreaName: this.refreshAreaName
							})
						),
						_react2.default.createElement(
							_col2.default,
							{ xs: 8, md: 4 },
							_react2.default.createElement(_Pickers.PayTypePicker, {
								payTypeList: this.state.reportDictionaryDate.paySubjectLst,
								refreshPayType: this.refreshPayType
							})
						)
					),
					_react2.default.createElement(
						'div',
						{ style: { marginTop: 10 } },
						_react2.default.createElement(CheckboxGroup, {
							options: checkBoxOptions,
							onChange: this.handleChangeCheckBox
						})
					),
					_react2.default.createElement(
						'div',
						{ style: { marginTop: 10 } },
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

	return BillReport;
}(_react.Component);

exports.default = BillReport;