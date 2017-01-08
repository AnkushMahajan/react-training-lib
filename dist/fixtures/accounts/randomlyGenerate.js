'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RandomAccount = RandomAccount;
exports.RandomAccountList = RandomAccountList;

var _users = require('../users');

var _helpers = require('../helpers');

var _account = require('./account');

var _account2 = _interopRequireDefault(_account);

var _transaction3 = require('./transaction');

var _transaction4 = _interopRequireDefault(_transaction3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RandomAccount(currentUser, type) {
  var account = (0, _account2.default)(currentUser, type);
  var numberOfTransactions = (0, _helpers.randomNumberBetween)(20, 100);

  // First transaction is always en emptry transaction making the balance 0
  account.transactions.push((0, _transaction4.default)(0, true));

  // Generate transactions for the Account
  for (var i = 0; i < numberOfTransactions; i++) {
    var isCredit = !Math.round(Math.random());
    var transactionAmount = isCredit ? (0, _helpers.randomCurrencyBetween)(1, 75) : (0, _helpers.randomCurrencyBetween)(1, 50);
    var transaction = (0, _transaction4.default)(transactionAmount, isCredit);

    account.transactions.unshift(transaction);
  }

  // Override the dates of the transaction to be more natural
  for (var _i = 0; _i < account.transactions.length; _i++) {
    var _transaction = account.transactions[_i];

    // Make every transaction 1 day intervals
    var timestamp = new Date();

    timestamp.setDate(timestamp.getDate() - (_i + 1));

    var start = new Date(timestamp);
    var end = new Date(timestamp);

    start.setHours(start.getHours() - 12);
    end.setHours(end.getHours() + 12);
    timestamp = (0, _helpers.randomDateBetween)(start, end);

    // Set timestamp
    _transaction.timestamp = timestamp;
  }

  // Sort the Transactions to make sure they're in correct date order
  account.transactions = account.transactions.sort(function (a, b) {
    return b.timestamp - a.timestamp;
  });

  // Calculate updated account balance based on generated transactions
  for (var _i2 = account.transactions.length - 1; _i2 >= 0; _i2--) {
    var _transaction2 = account.transactions[_i2];

    _transaction2.balanceBefore = Number(account.balance || 0);

    if (_transaction2.type === 'credit') {
      account.balance += _transaction2.amount;
    } else {
      account.balance -= _transaction2.amount;
    }

    account.balance = parseFloat(account.balance.toFixed(2));
    _transaction2.balanceAfter = Number(account.balance);
  }

  return account;
}

function RandomAccountList() {
  var numberOfAccounts = (0, _helpers.randomNumberBetween)(5, 10);
  var accountList = [];

  for (var i = 0; i < numberOfAccounts; i++) {
    accountList.push(RandomAccount(_users.currentUser));
  }

  return accountList;
}