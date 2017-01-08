'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Instructions;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMdl = require('react-mdl');

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Instructions(_ref) {
  var exercise = _ref.exercise;

  return _react2.default.createElement(
    'div',
    { className: 'exercise-instructions' },
    _react2.default.createElement(
      _reactMdl.Card,
      { shadow: 1, style: { width: '100%', maxWidth: '800px', margin: 'auto', marginBottom: '20px' } },
      _react2.default.createElement(
        _reactMdl.CardText,
        { style: { width: '95%' } },
        _react2.default.createElement(_reactMarkdown2.default, { source: exercise })
      )
    )
  );
}