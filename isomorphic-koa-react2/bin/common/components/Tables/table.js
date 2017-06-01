"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.formateDate = function (dateTxt) {
      var year = dateTxt.substring(2, 4).length == 2 ? dateTxt.substring(2, 4) : "--";
      var month = dateTxt.substring(4, 6).length == 2 ? dateTxt.substring(4, 6) : "--";
      var day = dateTxt.substring(6, 8).length == 2 ? dateTxt.substring(6, 8) : "--";
      var hour = dateTxt.substring(8, 10).length == 2 ? dateTxt.substring(8, 10) : "--";
      var minute = dateTxt.substring(10, 12).length == 2 ? dateTxt.substring(10, 12) : "--";
      var second = dateTxt.substring(12, 14).length == 2 ? dateTxt.substring(12, 14) : "--";
      return year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
    };

    _this.generateTableHeader = function (headerDate) {
      var headerDate = headerDate || [];
      return _react2.default.createElement(
        "thead",
        null,
        headerDate.map(function (elem, index) {
          return _react2.default.createElement(
            "tr",
            { key: 'tr_' + index },
            elem.map(function (ele, indx) {
              return _react2.default.createElement(
                "th",
                { key: 'td_' + indx, rowSpan: ele.rowspan, colSpan: ele.colspan },
                ele.text
              );
            })
          );
        })
      );
    };

    _this.generateTableBody = function (rspRecordsList, nameList) {
      var nameList = nameList || [];
      return _react2.default.createElement(
        "tbody",
        null,
        rspRecordsList.map(function (elem, index) {
          return _react2.default.createElement(
            "tr",
            { key: 'btr_' + index },
            nameList.map(function (ele, indx) {
              if (ele == "createTime" || ele == "endWorkTime") {
                // return(
                //   <td key={'btd_'+indx}>
                //     {this.formateDate(elem[ele])}
                //   </td>
                // );
                return _react2.default.createElement(
                  "td",
                  { key: 'btd_' + indx },
                  elem[ele]
                );
              } else if (ele == "paidAmount" || ele == "promotionAmount" || ele == "foodAmount" || ele == "waitCheckoutOrderAmount") {
                var tdTxt = "";
                if (elem[ele]) {
                  tdTxt = "￥" + elem[ele];
                }
                return _react2.default.createElement(
                  "td",
                  { key: 'btd_' + indx },
                  tdTxt
                );
              } else if (ele == "isTempFood" || ele == "isSetFood") {
                if (elem[ele] == 1) {
                  return _react2.default.createElement(
                    "td",
                    { key: 'btd_' + indx },
                    "√"
                  );
                } else {
                  return _react2.default.createElement(
                    "td",
                    { key: 'btd_' + indx },
                    ""
                  );
                }
              } else {
                return _react2.default.createElement(
                  "td",
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

  //当初次渲染完毕 设置该组件的属性


  _createClass(Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
    // this.setState({"firstView": true});


    //当传入的props有变化. 代表数据有更新，需要重新渲染table

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ rspRecordsList: nextProps.rspRecordsList });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.rspRecordsList.length == 0) {
        return _react2.default.createElement(
          "div",
          { className: "result-table" },
          _react2.default.createElement(
            "div",
            { className: "no-data" },
            "\u65E0\u7ED3\u679C"
          )
        );
      } else {
        return _react2.default.createElement(
          "div",
          { className: "result-table" },
          _react2.default.createElement(
            "table",
            { className: "table table-striped table-bordered table-nowrap table-headmiddle table-headnowrap" },
            this.generateTableHeader(headerCfg[this.state.tableName]['headerTextsList']),
            this.generateTableBody(this.state.rspRecordsList, headerCfg[this.state.tableName]['nameList'])
          )
        );
      }
    }
  }]);

  return Table;
}(_react2.default.Component);

exports.default = Table;


var headerCfg = {
  foodDetail: {
    headerTextsList: [[{ text: "详情", colspan: 6, rowspan: 1 }, { text: "点菜", colspan: 3, rowspan: 1 }, { text: "退菜", colspan: 4, rowspan: 1 }, { text: "赠菜", colspan: 4, rowspan: 1 }, { text: "其他", colspan: 4, rowspan: 1 }], [{ text: "账单号", colspan: 1, rowspan: 1 }, { text: "台牌号", colspan: 1, rowspan: 1 }, { text: "日期", colspan: 1, rowspan: 1 }, { text: "分类", colspan: 1, rowspan: 1 }, { text: "品名", colspan: 1, rowspan: 1 }, { text: "规格", colspan: 1, rowspan: 1 }, { text: "人员", colspan: 1, rowspan: 1 }, { text: "数量", colspan: 1, rowspan: 1 }, { text: "时间", colspan: 1, rowspan: 1 }, { text: "人员", colspan: 1, rowspan: 1 }, { text: "数量", colspan: 1, rowspan: 1 }, { text: "时间", colspan: 1, rowspan: 1 }, { text: "原因", colspan: 1, rowspan: 1 }, { text: "人员", colspan: 1, rowspan: 1 }, { text: "数量", colspan: 1, rowspan: 1 }, { text: "时间", colspan: 1, rowspan: 1 }, { text: "原因", colspan: 1, rowspan: 1 }, { text: "临时菜", colspan: 1, rowspan: 1 }, { text: "套餐标记", colspan: 1, rowspan: 1 }, { text: "套餐名", colspan: 1, rowspan: 1 }, { text: "要求", colspan: 1, rowspan: 1 }]],
    nameList: ["saasOrderKey", "tableName", "createTime", "foodCategoryName", "foodName", "unit", "orderBy", "foodNumber", "createTime", "cancelBy", "foodCancelNumber", "cancelTime", "cancelReason", "sendBy", "foodSendNumber", "sendTime", "sendReason", "isTempFood", "isSetFood", "setFoodName", "foodRemark"]
  },
  operationLog: {
    headerTextsList: [[{ text: "创建时间", colspan: 1, rowspan: 1 }, { text: "操作人员", colspan: 1, rowspan: 1 }, { text: "日志类型", colspan: 1, rowspan: 1 }, { text: "日志描述", colspan: 1, rowspan: 1 }, { text: "设备名称", colspan: 1, rowspan: 1 }]],
    nameList: ["createTime", "createBy", "logSubject", "logRemark", "deviceName"]
  },
  shiftLog: {
    headerTextsList: [[{ text: "交班人员", colspan: 1, rowspan: 1 }, { text: "开始时间", colspan: 1, rowspan: 1 }, { text: "交班时间", colspan: 1, rowspan: 1 }, { text: "备用金", colspan: 1, rowspan: 1 }, { text: "交班备注", colspan: 1, rowspan: 1 }]],
    nameList: ["checkoutBy", "createTime", "endWorkTime", "inSpareCashAmount", "shiftRemark"]
  },
  currentOperatingState: {
    headerTextsList: [[{ text: "类型", colspan: 1, rowspan: 1 }, { text: "单数", colspan: 1, rowspan: 1 }, { text: "人数", colspan: 1, rowspan: 1 }, { text: "流水", colspan: 1, rowspan: 1 }, { text: "待结单数", colspan: 1, rowspan: 1 }, { text: "待结金额", colspan: 1, rowspan: 1 }, { text: "优惠金额", colspan: 1, rowspan: 1 }, { text: "实收金额", colspan: 1, rowspan: 1 }]],
    nameList: ["typeName", "orderCount", "person", "foodAmount", "waitCheckoutOrderCount", "waitCheckoutOrderAmount", "promotionAmount", "paidAmount"]
  }
};