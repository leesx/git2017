'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactMobilePicker = require('react-mobile-picker');

var _reactMobilePicker2 = _interopRequireDefault(_reactMobilePicker);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePicker = function (_React$Component) {
  _inherits(DateTimePicker, _React$Component);

  function DateTimePicker(props) {
    _classCallCheck(this, DateTimePicker);

    var _this = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, props));

    _this.handleChange = function (name, value) {

      /**
       * 生成下一个state
       * @param  {[type]} valueGroups  [description]
       * @param  {[type]} optionGroups [description]
       * @return [type]                [description]
       */

      var genNextState = function genNextState(_ref) {
        var valueGroups = _ref.valueGroups,
            optionGroups = _ref.optionGroups;

        var nextState = {
          valueGroups: _extends({}, valueGroups, _defineProperty({}, name, value))
        };
        var totalDate = new Date(valueGroups.year, valueGroups.month, 0).getDate();
        nextState.optionGroups = _extends({}, optionGroups, {
          day: generateNumberArray(1, totalDate)
        });
        _this.props.updateDateTime(_this.props.startOrEnd, nextState.valueGroups);
        return nextState;
      };
      _this.setState(genNextState);
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
      valueGroups: _helpers.DateUtils.transformToValueGroups(_this.props.date),
      optionGroups: _helpers.DateUtils.transformToOptionGroups(_this.props.date)
    };
    return _this;
  }

  // Update the value in response to user picking event


  _createClass(DateTimePicker, [{
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
        { className: 'date-time-picker' },
        _react2.default.createElement(
          'div',
          { onClick: this.togglePicker },
          _react2.default.createElement(
            'a',
            { href: 'javascript:;' },
            valueGroups.year + "/" + valueGroups.month + "/" + valueGroups.day + " " + valueGroups.hour + ":" + valueGroups.minute
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
                '\u65E5\u671F\u65F6\u95F4\u9009\u62E9',
                _react2.default.createElement(
                  'span',
                  { onClick: this.togglePicker },
                  '\u786E\u5B9A'
                )
              )
            ),
            _react2.default.createElement(_reactMobilePicker2.default, { ref: 'picker',
              optionGroups: optionGroups,
              valueGroups: valueGroups,
              onChange: this.handleChange })
          )
        )
      );
    }
  }]);

  return DateTimePicker;
}(_react2.default.Component);

exports.default = DateTimePicker;


function generateNumberArray(begin, end) {
  var array = [];
  for (var i = begin; i <= end; i++) {
    array.push((i < 10 ? '0' : '') + i);
  }
  return array;
}