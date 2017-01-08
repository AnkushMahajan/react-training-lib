'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Exercise3Instructions = exports.Exercise2Instructions = exports.Exercise1Instructions = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Instructions = require('./Instructions');

var _Instructions2 = _interopRequireDefault(_Instructions);

require('./index.css');

var _exercise = require('./exercises/exercise-01');

var _exercise2 = _interopRequireDefault(_exercise);

var _exercise3 = require('./exercises/exercise-02');

var _exercise4 = _interopRequireDefault(_exercise3);

var _exercise5 = require('./exercises/exercise-03');

var _exercise6 = _interopRequireDefault(_exercise5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Exercise1Instructions = exports.Exercise1Instructions = function Exercise1Instructions() {
  return _react2.default.createElement(_Instructions2.default, { exercise: _exercise2.default });
};

var Exercise2Instructions = exports.Exercise2Instructions = function Exercise2Instructions() {
  return _react2.default.createElement(_Instructions2.default, { exercise: _exercise4.default });
};

var Exercise3Instructions = exports.Exercise3Instructions = function Exercise3Instructions() {
  return _react2.default.createElement(_Instructions2.default, { exercise: _exercise6.default });
};