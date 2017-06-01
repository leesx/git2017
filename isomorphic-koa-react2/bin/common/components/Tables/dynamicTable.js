"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DynamicTable = function (_React$Component) {
  _inherits(DynamicTable, _React$Component);

  function DynamicTable(props) {
    _classCallCheck(this, DynamicTable);

    var _this = _possibleConstructorReturn(this, (DynamicTable.__proto__ || Object.getPrototypeOf(DynamicTable)).call(this, props));

    _this.state = {
      rspRecordsList: _this.props.rspRecordsList
    };
    return _this;
  }

  //当初次渲染完毕 设置该组件的属性


  _createClass(DynamicTable, [{
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
            { className: "table table-bordered table-nowrap table-headmiddle table-headnowrap" },
            generateTableHeader(this.state.rspRecordsList),
            generateTableBody(this.state.rspRecordsList)
          )
        );
      }
    }
  }]);

  return DynamicTable;
}(_react2.default.Component);

exports.default = DynamicTable;


function generateTableHeader(recordList) {
  var headerArray = recordList[0].row.slice();
  var headerDate = createDynamicTableHeadData(headerArray) || [];

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

function generateTableBody(recordList) {
  var records = [];

  for (var i = 1; i < recordList.length; i++) {
    records.push(recordList[i].row.slice());
  }

  return _react2.default.createElement(
    "tbody",
    null,
    records.map(function (elem, index) {
      return _react2.default.createElement(
        "tr",
        { key: 'btr_' + index },
        elem.map(function (ele, indx) {
          return _react2.default.createElement(
            "td",
            { key: 'btd_' + indx },
            elem[indx]
          );
        })
      );
    })
  );
}

function createDynamicTableHeadData(headerArray) {

  var deep = 1;
  var headerArraySplit = [];
  for (var i = 0; i < headerArray.length; i++) {
    var thisArr = headerArray[i].split("|");
    headerArraySplit.push(thisArr);
    if (thisArr.length > deep) {
      deep = thisArr.length;
    }
  }

  var headerArrayFilter = [];
  for (var j = 1; j <= deep; j++) {
    var insideArr = [];
    for (var y = 0; y < headerArraySplit.length; y++) {
      if (headerArraySplit[y].length >= j) {
        var rowspan = 1;
        if (headerArraySplit[y].length == j) rowspan = deep - j + 1;
        insideArr.push({
          text: headerArraySplit[y][j - 1],
          rowspan: rowspan
        });
      }
    }
    headerArrayFilter.push(insideArr);
  }

  var beforeHeader = [];
  for (var a = 0; a < deep; a++) {
    beforeHeader.push([]);
  }

  for (var m = 0; m < headerArrayFilter.length; m++) {

    for (var n = 0; n < headerArrayFilter[m].length; n++) {
      for (var x = n + 1; x < headerArrayFilter[m].length; x++) {
        if (headerArrayFilter[m][n].text != headerArrayFilter[m][x].text) {
          var len = x - n;
          var temp = _extends({}, headerArrayFilter[m][n]);
          temp.colspan = len;
          beforeHeader[m].push(temp);
          n = x - 1;
          break;
        }
      }

      if (n == headerArrayFilter[m].length - 1) {
        var _len = 0;
        for (var _i = n; _i > 0; _i--) {
          if (headerArrayFilter[m][n].text == headerArrayFilter[m][_i].text) {
            _len++;
          } else {
            var temp = _extends({}, headerArrayFilter[m][n]);
            temp.colspan = _len;
            beforeHeader[m].push(temp);
            break;
          }
        }
      }
    }
  }

  return beforeHeader;
}