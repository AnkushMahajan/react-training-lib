'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Message(sender, reciever, msg) {
  var message = {
    id: _uuid2.default.v4(),
    text: msg || '',
    createdAt: new Date().toUTCString(),
    updatedAt: null,
    sender: sender,
    reciever: reciever
  };

  return message;
}

exports.default = Message;