'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pagination = require('antd/lib/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

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

var _PrintBtn = require('components/PrintBtn.jsx');

var _PrintBtn2 = _interopRequireDefault(_PrintBtn);

var _helpers = require('helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 将时间字符串转化为标准格式
 * eg. 20170414183412 ---> 2017/04/14 18:34:12
 * @param  {String} timeStr 时间字符串
 * @return {String}
 */
function regTimeString(timeStr) {
  if (!timeStr) return;
  var reg = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
  var regTextArr = timeStr.match(reg);
  return regTextArr[1] + '/' + regTextArr[2] + '/' + regTextArr[3] + '  ' + regTextArr[4] + ':' + regTextArr[5];
}

var columns = [{
  title: '交班人员',
  dataIndex: 'checkoutBy',
  key: 'checkoutBy',
  width: 100
}, {
  title: '开始时间',
  dataIndex: 'createTime',
  key: 'createTime',
  width: 140,
  render: function render(text) {
    return regTimeString(text);
  }
}, {
  title: '交班时间',
  dataIndex: 'endWorkTime',
  key: 'endWorkTime',
  width: 140,
  render: function render(text) {
    return regTimeString(text);
  }
}, {
  title: '备用金',
  dataIndex: 'inSpareCashAmount',
  key: 'inSpareCashAmount',
  width: 100,
  render: function render(text) {
    return '\uFFE5' + text;
  }
}, {
  title: '交班备注',
  dataIndex: 'shiftRemark',
  key: 'shiftRemark',
  width: 200
}];

var ShiftLog = function (_React$Component) {
  _inherits(ShiftLog, _React$Component);

  function ShiftLog(props) {
    _classCallCheck(this, ShiftLog);

    var _this = _possibleConstructorReturn(this, (ShiftLog.__proto__ || Object.getPrototypeOf(ShiftLog)).call(this, props));

    _this.getSiteInfo = function () {
      _helpers.SiteInfo.getSiteInfo(function () {
        _this.setState({ reportDictionaryDate: _helpers.SiteInfo.info });
      });
    };

    _this.refreshCashier = function (value) {
      _this.setState({ "cashier": value });
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

    _this.refreshPrintTxt = function (printTxt) {
      _this.setState({ "printTxt": printTxt });
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
          cashier = _this$state.cashier,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate;

      var date = {
        startDateTime: _helpers.DateUtils.transformString(_helpers.DateUtils.toValueGroupsNoTime(startDate)) + '000000',
        endDateTime: _helpers.DateUtils.transformString(_helpers.DateUtils.toValueGroupsNoTime(endDate)) + '235959'
      };
      var _this$state$tableData = _this.state.tableDataSource,
          pageSize = _this$state$tableData.pageSize,
          current = _this$state$tableData.current;

      var diffTime = startDate.getTime() - endDate.getTime();

      if (diffTime > 0) {
        _message2.default.warn('开始时间必须小于结束时间,请重新选择', 3);
        return false;
      }

      _this.showLoading();
      //发起ajax请求
      (0, _helpers.fetchData)({
        url: "/saas/order/queryshiftdata.ajax",
        method: "POST",
        data: _extends({}, date, {
          checkoutBy: cashier,
          // startDateTime:startDate+"000000",
          // endDateTime:endDate+"235959",
          pageNo: current,
          pageSize: pageSize
        })
      }).then(function (rsp) {
        _this.refreshState(rsp);
      }).catch(function (error) {
        console.error(error);
      }).finally(function () {
        _this.hiddenLoading();
        console.log("done");
      });
    };

    _this.handleClickRow = function (record, index) {
      _this.setState({
        printTxt: record.printTxt
      });
    };

    _this.formatPrintTxt2Html = function () {
      var prntTxt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var txt = decodeURIComponent(prntTxt);
      if (isEmptyObject(txt)) return _react2.default.createElement(
        'div',
        { className: 'ant-table-placeholder' },
        _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement('i', { className: 'anticon anticon-frown-o' }),
          _react2.default.createElement(
            'span',
            null,
            '\u6682\u65E0\u6570\u636E'
          )
        )
      );
      var str = txt.replace(/[\n\r]/g, '').replace(/\:<HLLFONT-\d-\d-\d>/g, '');
      var arr = str.split(/\<HLLFONT-\d-\d-\d\>/g).filter(function (item) {
        return !!item.toString();
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'print-ticket' },
          arr.map(function (lineTxt, index) {
            return _react2.default.createElement(
              'div',
              { key: 'p_' + index },
              _react2.default.createElement(
                'pre',
                { className: index === 0 || index === 2 ? 'bold' : null },
                lineTxt
              )
            );
          })
        ),
        _react2.default.createElement(_PrintBtn2.default, { printTxt: _this.state.printTxt })
      );
    };

    _this.state = {
      cashier: "全部",
      startDate: new Date(),
      endDate: new Date(),
      tableDataSource: {
        current: 1,
        pageSize: 15,
        total: 0, //总共数据条数
        dataSource: [] },
      printTxt: "",
      reportDictionaryDate: {},
      isLoadingShow: true
    };
    _this.getSiteInfo();
    _this.handleSearch();
    return _this;
  }

  //更新日期时间


  //更新页码


  //点击查询按钮


  //弹出加载动画

  //隐藏加载动画


  //查询结果


  //点击行


  //将打印日志的text转换成html


  _createClass(ShiftLog, [{
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
        { className: '', style: { height: '100%' } },
        _react2.default.createElement(
          _row2.default,
          { className: 'query-pan' },
          _react2.default.createElement(
            _col2.default,
            { xs: 24, md: 8 },
            _react2.default.createElement(
              'div',
              { className: 'query-pan-item' },
              _react2.default.createElement(_Pickers.DatePicker, {
                updateDateTime: this.updateDateTime,
                date: startDate,
                startOrEnd: 'start'
              }),
              _react2.default.createElement(_icon2.default, { type: 'minus', className: 'icon-spliter' }),
              _react2.default.createElement(_Pickers.DatePicker, {
                updateDateTime: this.updateDateTime,
                date: endDate,
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
            { xs: 4, md: 12 },
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', onClick: this.searchClick },
              '\u67E5\u8BE2'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { height: '100%' } },
          _react2.default.createElement(
            'div',
            { className: 'result-left', style: { height: '100%' } },
            this.formatPrintTxt2Html(this.state.printTxt)
          ),
          _react2.default.createElement(
            'div',
            { className: 'result-right' },
            _react2.default.createElement(
              'div',
              { className: 'yunpad-table' },
              _react2.default.createElement(_table2.default, {
                columns: columns,
                dataSource: dataSource,
                bordered: true,
                pagination: false,
                onRowClick: this.handleClickRow,
                scroll: { x: '100%', y: 400 }
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
            )
          )
        ),
        _react2.default.createElement(_Loading2.default, { isLoadingShow: this.state.isLoadingShow })
      );
    }
  }]);

  return ShiftLog;
}(_react2.default.Component);

//判断对象是否为空


exports.default = ShiftLog;
function isEmptyObject(obj) {
  for (var o in obj) {
    return false;
  }
  return true;
}