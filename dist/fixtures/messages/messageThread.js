'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _helpers = require('../helpers');

var _users = require('../users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// List of potential messages from the bank
var messageThreadTypes = [{
  title: 'Your Small Business Loan has been approved!',
  message: 'We\'ve reviewed your application and are happy to say we\'ve approved your loan #11234321',
  sender: _users.supportSender
}, {
  title: 'New Offer to help your Business',
  message: '...',
  sender: _users.marketingSender
}, {
  title: 'Worry less! Activate Google Wallet for Your credit or debit card',
  message: '...',
  sender: _users.marketingSender
}, {
  title: 'Update to your Monthlfy fees',
  message: '...',
  sender: _users.supportSender
}];

function MessageThread() {
  var typeIdx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


  var type = void 0;

  if (typeIdx) {
    type = messageThreadTypes[typeIdx];
  } else {
    var rndTypeIdx = (0, _helpers.randomNumberBetween)(0, messageThreadTypes.length - 1);
    type = messageThreadTypes[rndTypeIdx];
  }

  var title = type.title;
  var initialMessage = type.message;
  var user = type.sender;

  var messageThread = {
    id: _uuid2.default.v4(),
    title: title,
    user: user, // A thread will always be between the currentUser and the messageThread.user
    messages: [(0, _message2.default)(user, _users.currentUser, initialMessage)],
    createdAt: new Date().toUTCString(),
    updatedAt: null
  };

  return messageThread;
}

exports.default = MessageThread;