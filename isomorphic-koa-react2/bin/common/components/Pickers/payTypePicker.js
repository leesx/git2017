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

var PayTypePicker = function (_React$Component) {
  _inherits(PayTypePicker, _React$Component);

  function PayTypePicker(props) {
    _classCallCheck(this, PayTypePicker);

    var _this = _possibleConstructorReturn(this, (PayTypePicker.__proto__ || Object.getPrototypeOf(PayTypePicker)).call(this, props));

    _initialiseProps.call(_this);

    var payTypeData = _this.getPayTypeData(_this.props.payTypeList);
    _this.state = _extends({}, payTypeData, {
      isPickerShow: false
    });

    return _this;
  }

  //计算state中的渠道数据


  // 上下滑动选择项会更新父组件相应的state


  _createClass(PayTypePicker, [{
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
                '\u652F\u4ED8\u65B9\u5F0F',
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

  return PayTypePicker;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.componentWillReceiveProps = function (nextProps) {
    if (_this2.props.payTypeList != nextProps.payTypeList) {
      var payTypeData = _this2.getPayTypeData(nextProps.payTypeList);
      _this2.setState(_extends({}, payTypeData));
    }
  };

  this.getPayTypeData = function (payTypes) {

    var payTypeList = payTypes || [];

    var optionsGroupTitle = ["支付方式"];
    payTypeList.map(function (elem) {
      optionsGroupTitle.push(elem.Key);
    });

    return {
      payTypeList: payTypeList,
      valueGroups: {
        title: "支付方式"
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

    if (value == "支付方式") {
      v = "全部";
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _this2.state.payTypeList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
      _this2.props.refreshPayType(v);
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

exports.default = PayTypePicker;