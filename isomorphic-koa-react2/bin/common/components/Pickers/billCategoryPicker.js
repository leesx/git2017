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

var BillCategoryPicker = function (_React$Component) {
  _inherits(BillCategoryPicker, _React$Component);

  function BillCategoryPicker(props) {
    _classCallCheck(this, BillCategoryPicker);

    var _this = _possibleConstructorReturn(this, (BillCategoryPicker.__proto__ || Object.getPrototypeOf(BillCategoryPicker)).call(this, props));

    _this.handleChange = function (name, value) {
      _this.setState(function (_ref) {
        var valueGroups = _ref.valueGroups;
        return {
          valueGroups: _extends({}, valueGroups, _defineProperty({}, name, value))
        };
      });

      var v = void 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this.state.optionGroupsObjList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var obj = _step.value;

          if (obj.key == value) {
            v = obj.value;
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
        _this.props.refreshBillCategory(v);
      }
    };

    _this.togglePicker = function () {
      _this.setState(function (_ref2) {
        var isPickerShow = _ref2.isPickerShow;
        return {
          isPickerShow: !isPickerShow
        };
      }, function () {
        if (_this.state.isPickerShow) {

          var dom = _this.refs.modal;
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

    _this.state = {
      isPickerShow: false,
      valueGroups: {
        title: "账单类型"
      },
      optionGroups: {
        title: ["账单类型", "全部", "食堂", "外卖", "自提"]
      },
      optionGroupsObjList: [{ key: "账单类型", value: "10" }, { key: "全部", value: "10" }, { key: "食堂", value: "20" }, { key: "外卖", value: "30" }, { key: "自提", value: "40" }]
    };

    return _this;
  }

  // 上下滑动选择项会更新父组件相应的state


  _createClass(BillCategoryPicker, [{
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
                '\u8D26\u5355\u7C7B\u578B',
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

  return BillCategoryPicker;
}(_react2.default.Component);

exports.default = BillCategoryPicker;