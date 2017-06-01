'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by leesx on 17/3/21.
                                                                                                                                                                                                                                                                               */

exports.default = configureStore;

var _redux = require('redux');

var _lodash = require('lodash');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reducers = require('./../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import {bindMutatorsToStore} from '../helpers/reduxMutator';

function configureStore(initialState) {
  var middlewares = [_reduxThunk2.default];

  if (process.env.__CLIENT__ === true) {
    var stateTransformer = function stateTransformer(states) {
      var finalStates = {};
      for (var key in states) {
        if (!states.hasOwnProperty(key)) continue;

        var state = states[key];

        if (_immutable2.default.Iterable.prototype.isPrototypeOf(state) && _typeof((0, _lodash.isFunction)(state.toObject))) {
          finalStates[key] = state.toObject();
        } else if ((0, _lodash.isPlainObject)(state)) {
          finalStates[key] = key === 'routing' ? states : stateTransformer(state);
        }
      }
      return finalStates;
    };
    var args = {
      stateTransformer: stateTransformer,
      collapsed: true,
      colors: {
        title: function title() {
          return 'red';
        },
        prevState: function prevState() {
          return 'blue';
        },
        action: function action() {
          return 'orange';
        },
        nextState: function nextState() {
          return 'green';
        },
        error: function error() {
          return '#F20404';
        }
      }
    };

    middlewares.push((0, _reduxLogger2.default)(args));
  }

  var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middlewares), process.env.__CLIENT__ === true && window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
  }));

  // bindMutatorsToStore(store);

  // for redux hot reload
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./../reducers', function () {
      store.replaceReducer(require('./../reducers'));
    });
  }

  return store;
}