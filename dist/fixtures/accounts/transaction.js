'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Transaction(amount, isCredit) {
  var transaction = {
    id: _uuid2.default.v4(),
    type: isCredit ? 'credit' : 'debit',
    timestamp: new Date(),
    currency: 'AUD',
    amount: amount
  };
  return transaction;
}

exports.default = Transaction;