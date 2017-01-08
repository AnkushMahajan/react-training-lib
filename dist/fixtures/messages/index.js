'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageThreadDetailsFixture = exports.messageThreadsFixture = exports.messageThreads = exports.MessageThreadModel = exports.MessageModel = undefined;

var _randomlyGenerate = require('./randomlyGenerate');

var _messageThread = require('./messageThread');

var _messageThread2 = _interopRequireDefault(_messageThread);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propMessageThreads = (0, _randomlyGenerate.RandomMessageThreadList)();
var propMessageThreadsLimited = propMessageThreads.map(function (item) {
  return Object.assign({}, item);
});
var propMessageThread = Object.assign({}, propMessageThreads[0]);

// Don't include messages in View model for List view
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = propMessageThreadsLimited[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var thread = _step.value;

    thread.messages = null;
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

exports.MessageModel = _message2.default;
exports.MessageThreadModel = _messageThread2.default;
exports.messageThreads = propMessageThreads;
exports.messageThreadsFixture = propMessageThreadsLimited;
exports.messageThreadDetailsFixture = propMessageThread;