'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RandomMessageThreadList = exports.RandomMessageThread = undefined;

var _loremIpsum = require('lorem-ipsum');

var _loremIpsum2 = _interopRequireDefault(_loremIpsum);

var _helpers = require('../helpers');

var _users = require('../users');

var _messageThread = require('./messageThread');

var _messageThread2 = _interopRequireDefault(_messageThread);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RandomMessageThread(loggedInUser) {
  var messageCount = (0, _helpers.randomNumberBetween)(0, 10);
  var messageThread = (0, _messageThread2.default)();

  // Fill it with some random messages
  var sender = messageThread.user;
  var reciever = loggedInUser;

  for (var i = 0; i < messageCount; i++) {

    messageThread.messages.push((0, _message2.default)(sender, reciever, (0, _loremIpsum2.default)()));

    // 50% chance for conversation to switch to the other person
    if (!(0, _helpers.randomNumberBetween)(0, 1)) {
      var temp = sender;

      sender = reciever;
      reciever = temp;
    }
  }

  return messageThread;
}

function RandomMessageThreadList() {
  var threadCount = (0, _helpers.randomNumberBetween)(3, 8);
  var threadList = [];

  // Fill it with some random messages
  for (var i = 0; i < threadCount; i++) {
    threadList.push(RandomMessageThread(_users.currentUser));
  }

  return threadList;
}

exports.RandomMessageThread = RandomMessageThread;
exports.RandomMessageThreadList = RandomMessageThreadList;