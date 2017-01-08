'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accountDetailsFixture = exports.accountsListFixture = exports.accountsList = exports.TransactionModel = exports.AccountModel = undefined;

var _account = require('./account');

var _account2 = _interopRequireDefault(_account);

var _transaction = require('./transaction');

var _transaction2 = _interopRequireDefault(_transaction);

var _randomlyGenerate = require('./randomlyGenerate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Generate server
var propAccounts = (0, _randomlyGenerate.RandomAccountList)();

// Generate fixtures
var propAccountsLimited = propAccounts.map(function (item) {
  return Object.assign({}, item);
});
var propAccount = Object.assign({}, propAccountsLimited[0]);

// Don't include transactions in View model for List view
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = propAccountsLimited[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var acc = _step.value;

    acc.transactions = null;
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

exports.AccountModel = _account2.default;
exports.TransactionModel = _transaction2.default;
exports.accountsList = propAccounts;
exports.accountsListFixture = propAccountsLimited;
exports.accountDetailsFixture = propAccount;