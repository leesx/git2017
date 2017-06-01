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

var AreaNamePicker = function (_React$Component) {
  _inherits(AreaNamePicker, _React$Component);

  function AreaNamePicker(props) {
    _classCallCheck(this, AreaNamePicker);

    var _this = _possibleConstructorReturn(this, (AreaNamePicker.__proto__ || Object.getPrototypeOf(AreaNamePicker)).call(this, props));

    _initialiseProps.call(_this);

    var areaNameData = _this.getAreaNameData(_this.props.areaNameList);
    _this.state = _extends({}, areaNameData, {
      isPickerShow: false
    });

    return _this;
  }

  //计算state中的渠道数据


  // 上下滑动选择项会更新父组件相应的state


  _createClass(AreaNamePicker, [{
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
                '\u533A\u57DF\u540D\u79F0',
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

  return AreaNamePicker;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.componentWillReceiveProps = function (nextProps) {
    if (_this2.props.areaNameList != nextProps.areaNameList) {
      var areaNameData = _this2.getAreaNameData(nextProps.areaNameList);
      _this2.setState(_extends({}, areaNameData));
    }
  };

  this.getAreaNameData = function (areaNames) {

    var areaNameList = areaNames || [];

    var optionsGroupTitle = ["区域名称"];
    areaNameList.map(function (elem) {
      optionsGroupTitle.push(elem.Key);
    });

    return {
      areaNameList: areaNameList,
      valueGroups: {
        title: "区域名称"
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

    if (value == "区域名称") {
      v = "全部";
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _this2.state.areaNameList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
      _this2.props.refreshAreaName(v);
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

exports.default = AreaNamePicker;