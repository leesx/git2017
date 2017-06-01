'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactMobilePicker = require('react-mobile-picker');

var _reactMobilePicker2 = _interopRequireDefault(_reactMobilePicker);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CashierPicker = function (_React$Component) {
  _inherits(CashierPicker, _React$Component);

  function CashierPicker(props) {
    _classCallCheck(this, CashierPicker);

    var _this = _possibleConstructorReturn(this, (CashierPicker.__proto__ || Object.getPrototypeOf(CashierPicker)).call(this, props));

    _initialiseProps.call(_this);

    var cashierData = _this.getCashierData(_this.props.cashierList);
    _this.state = _extends({}, cashierData, {
      isPickerShow: false
    });

    return _this;
  }

  //计算state中的收银员数据


  // 上下滑动选择项会更新父组件相应的state


  _createClass(CashierPicker, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          isPickerShow = _state.isPickerShow,
          optionGroups = _state.optionGroups,
          valueGroups = _state.valueGroups;

      var maskStyle = {
        display: isPickerShow ? 'block' : 'none'
      };
      var pickerModalClass = 'picker-modal' + (isPickerShow ? ' picker-modal-show' : '');

      return _react2.default.createElement(
        'div',
        { className: 'query-pan-item' },
        _react2.default.createElement(
          'div',
          { onClick: this.togglePicker },
          _react2.default.createElement(
            'a',
            { href: 'javascript:;' },
            valueGroups.title
          ),
          _react2.default.createElement('i', { className: 'icon iconfont icon-moreunfold' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'picker-modal-container' },
          _react2.default.createElement('div', { className: 'picker-modal-mask', style: maskStyle, onClick: this.togglePicker }),
          _react2.default.createElement(
            'div',
            { className: pickerModalClass, ref: 'modal' },
            _react2.default.createElement('div', { className: 'icon iconfont icon-shoujiwangye01' }),
            _react2.default.createElement(
              'header',
              null,
              _react2.default.createElement(
                'div',
                { className: 'title' },
                '\u6536\u94F6\u4EBA\u5458',
                _react2.default.createElement(
                  'span',
                  { onClick: this.togglePicker },
                  '\u786E\u5B9A'
                )
              )
            ),
            _react2.default.createElement(_reactMobilePicker2.default, {
              optionGroups: optionGroups,
              valueGroups: valueGroups,
              onChange: this.handleChange })
          )
        )
      );
    }
  }]);

  return CashierPicker;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.componentWillReceiveProps = function (nextProps) {
    if (_this2.props.cashierList != nextProps.cashierList) {
      var cashierData = _this2.getCashierData(nextProps.cashierList);
      _this2.setState(_extends({}, cashierData));
    }
  };

  this.getCashierData = function (cashierList) {
    var checkoutByLst = cashierList || [];

    var optionsGroupTitle = ["收银人员"];
    checkoutByLst.map(function (elem) {
      optionsGroupTitle.push(elem.Key);
    });

    return {
      checkoutByLst: checkoutByLst,
      valueGroups: {
        title: "收银人员"
      },
      optionGroups: {
        title: optionsGroupTitle
      }
    };
  };

  this.handleChange = function (name, value) {
    var valueGroups = _this2.state.valueGroups;
    _this2.setState(function () {
      return {
        valueGroups: _extends({}, valueGroups, _defineProperty({}, name, value))
      };
    });

    var v = void 0;

    if (value == "收银人员") {
      v = "全部";
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _this2.state.checkoutByLst[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var obj = _step.value;

        if (obj.Key == value) {
          v = obj.Value;
          break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) != undefined) {
      _this2.props.refreshCashier(v);
    }
  };

  this.togglePicker = function () {
    _this2.setState(function (_ref) {
      var isPickerShow = _ref.isPickerShow;
      return {
        isPickerShow: !isPickerShow
      };
    }, function () {
      if (_this2.state.isPickerShow) {
        var dom = _this2.refs.modal;
        var screenWidth = window.screen.width;
        var domX = dom.getBoundingClientRect().left;
        var domW = dom.clientWidth;
        var left = domX + domW - screenWidth;
        if (left > 0) {
          dom.style.left = -(left + 5) + "px";
        }
      }
    });
  };
};

exports.default = CashierPicker;