'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function User(name, email) {
  var user = {
    id: _uuid2.default.v4(),
    createdAt: new Date().toUTCString(),
    updatedAt: null,
    email: email,
    name: name
  };

  return user;
}

exports.default = User;