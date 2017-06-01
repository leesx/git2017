'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Loading = require('components/common/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _helpers = require('helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var columns = [{
  title: '类型',
  dataIndex: 'typeName',
  key: 'typeName',
  width: 60
}, {
  title: '单数',
  dataIndex: 'orderCount',
  key: 'orderCount',
  width: 60
}, {
  title: '人数',
  dataIndex: 'person',
  key: 'person',
  width: 60
}, {
  title: '流水',
  dataIndex: 'foodAmount',
  key: 'foodAmount',
  width: 100
}, {
  title: '待结单数',
  dataIndex: 'waitCheckoutOrderCount',
  key: 'waitCheckoutOrderCount',
  width: 60
}, {
  title: '待结金额',
  dataIndex: 'waitCheckoutOrderAmount',
  key: 'waitCheckoutOrderAmount',
  width: 60
}, {
  title: '优惠金额',
  dataIndex: 'promotionAmount',
  key: 'promotionAmount',
  width: 60
}, {
  title: '实收金额',
  dataIndex: 'paidAmount',
  key: 'paidAmount',
  width: 60
}];

var CurrentOperatingState = function (_React$Component) {
  _inherits(CurrentOperatingState, _React$Component);

  function CurrentOperatingState(props) {
    _classCallCheck(this, CurrentOperatingState);

    var _this = _possibleConstructorReturn(this, (CurrentOperatingState.__proto__ || Object.getPrototypeOf(CurrentOperatingState)).call(this, props));

    _this.refreshState = function (rsp) {
      if (rsp.code == "000") {
        var dataSource = rsp.data.records;
        _this.setState(_extends(_this.state.tableDataSource, {
          dataSource: dataSource
        }));
      }
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
      _this.showLoading();
      //发起ajax请求
      (0, _helpers.fetchData)({
        url: "/saas/order/queryCurrBizData.ajax",
        method: "POST",
        data: {}
      }).then(function (rsp) {
        _this.refreshState(rsp);
      }).catch(function (error) {
        console.error(error);
      }).finally(function () {
        _this.hiddenLoading();
        console.log("done");
      });
    };

    _this.state = {
      tableDataSource: {
        dataSource: [] },
      isLoadingShow: true
    };
    _this.handleSearch();
    return _this;
  }

  //弹出加载动画

  //隐藏加载动画


  //查询结果


  _createClass(CurrentOperatingState, [{
    key: 'render',
    value: function render() {
      var dataSource = this.state.tableDataSource.dataSource;

      return _react2.default.createElement(
        'div',
        { className: '', style: { height: '100%' } },
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

  return CurrentOperatingState;
}(_react2.default.Component);

exports.default = CurrentOperatingState;