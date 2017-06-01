'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShiftTable = function (_React$Component) {
  _inherits(ShiftTable, _React$Component);

  function ShiftTable(props) {
    _classCallCheck(this, ShiftTable);

    var _this = _possibleConstructorReturn(this, (ShiftTable.__proto__ || Object.getPrototypeOf(ShiftTable)).call(this, props));

    _this.trClick = function (e) {
      var printTxt = e.target.parentNode.getAttribute("data-print-txt");
      _this.props.trClick(printTxt);
      // console.log(e.target.parentNode.getAttribute("data-print-txt"));
      // console.log(e.target.getAttribute("data-print-txt"));
    };

    _this.generateTableHeader = function (headerDate) {
      var headerDate = headerDate || [];
      return _react2.default.createElement(
        'thead',
        null,
        headerDate.map(function (elem, index) {
          return _react2.default.createElement(
            'tr',
            { key: 'tr_' + index },
            elem.map(function (ele, indx) {
              return _react2.default.createElement(
                'th',
                { key: 'td_' + indx, rowSpan: ele.rowspan, colSpan: ele.colspan },
                ele.text
              );
            })
          );
        })
      );
    };

    _this.formateDate = function (dateTxt) {
      var year = dateTxt.substring(2, 4).length == 2 ? dateTxt.substring(2, 4) : "--";
      var month = dateTxt.substring(4, 6).length == 2 ? dateTxt.substring(4, 6) : "--";
      var day = dateTxt.substring(6, 8).length == 2 ? dateTxt.substring(6, 8) : "--";
      var hour = dateTxt.substring(8, 10).length == 2 ? dateTxt.substring(8, 10) : "--";
      var minute = dateTxt.substring(10, 12).length == 2 ? dateTxt.substring(10, 12) : "--";
      var second = dateTxt.substring(12, 14).length == 2 ? dateTxt.substring(12, 14) : "--";
      return year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
    };

    _this.generateTableBody = function (rspRecordsList, nameList) {
      var nameList = nameList || [];
      return _react2.default.createElement(
        'tbody',
        null,
        rspRecordsList.map(function (elem, index) {
          return _react2.default.createElement(
            'tr',
            { key: 'btr_' + index, ref: 'tr', 'data-print-txt': elem.printTxt, onClick: _this.trClick },
            nameList.map(function (ele, indx) {
              if (ele == "createTime" || ele == "endWorkTime") {
                return _react2.default.createElement(
                  'td',
                  { key: 'btd_' + indx },
                  _this.formateDate(elem[ele])
                );
              } else if (ele == "inSpareCashAmount") {
                return _react2.default.createElement(
                  'td',
                  { key: 'btd_' + indx },
                  "￥" + elem[ele]
                );
              } else {
                return _react2.default.createElement(
                  'td',
                  { key: 'btd_' + indx },
                  elem[ele]
                );
              }
            })
          );
        })
      );
    };

    _this.state = {
      rspRecordsList: _this.props.rspRecordsList,
      tableName: _this.props.tableName
    };
    return _this;
  }

  _createClass(ShiftTable, [{
    key: 'componentDidMount',


    //当初次渲染完毕 设置该组件的属性
    value: function componentDidMount() {}
    // this.setState({"firstView": true});


    //当传入的props有变化. 代表数据有更新，需要重新渲染table

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ rspRecordsList: nextProps.rspRecordsList });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.rspRecordsList.length == 0) {
        return _react2.default.createElement(
          'div',
          { className: 'result-table' },
          _react2.default.createElement(
            'div',
            { className: 'no-data' },
            '\u65E0\u7ED3\u679C'
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'result-table' },
          _react2.default.createElement(
            'table',
            { className: 'table table-striped table-nowrap table-headmiddle table-headnowrap' },
            this.generateTableHeader(headerCfg[this.state.tableName]['headerTextsList']),
            this.generateTableBody(this.state.rspRecordsList, headerCfg[this.state.tableName]['nameList'])
          )
        );
      }
    }
  }]);

  return ShiftTable;
}(_react2.default.Component);

exports.default = ShiftTable;


var headerCfg = {
  shiftLog: {
    headerTextsList: [[{ text: "交班人员", colspan: 1, rowspan: 1 }, { text: "开始时间", colspan: 1, rowspan: 1 }, { text: "交班时间", colspan: 1, rowspan: 1 }, { text: "备用金", colspan: 1, rowspan: 1 }, { text: "交班备注", colspan: 1, rowspan: 1 }]],
    nameList: ["checkoutBy", "createTime", "endWorkTime", "inSpareCashAmount", "shiftRemark"]
  }
};