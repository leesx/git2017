'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrintBtn = function (_React$Component) {
  _inherits(PrintBtn, _React$Component);

  function PrintBtn(props) {
    _classCallCheck(this, PrintBtn);

    var _this = _possibleConstructorReturn(this, (PrintBtn.__proto__ || Object.getPrototypeOf(PrintBtn)).call(this, props));

    _this.togglePrint = function () {
      print(_this.state.printTxt);
    };

    _this.state = {
      printTxt: _this.props.printTxt
    };
    return _this;
  }

  //当传入的props有变化. 代表数据有更新


  _createClass(PrintBtn, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ "printTxt": nextProps });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        { className: 'print-btn' },
        _react2.default.createElement(
          'button',
          { onClick: this.togglePrint },
          '\u6253\u5370\u73ED\u7ED3\u62A5\u8868'
        )
      );
    }
  }]);

  return PrintBtn;
}(_react2.default.Component);

exports.default = PrintBtn;