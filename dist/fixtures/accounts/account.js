'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// List of potential types of bank accounts
var accountTypes = [{ name: 'Everyday', desc: 'A bank account for everyday access' }, { name: 'Savings', desc: 'Flexible savings account' }, { name: 'Personal', desc: '...' }, { name: 'Investment', desc: '...', icon: 'business_center' }, { name: 'Term Deposit', desc: '...', icon: 'business_center' }, { name: 'Kids Banking', desc: 'Help make banking fun for kids!', icon: 'child_care' }, { name: 'Visa Debit', desc: 'Simple visa debit access account', icon: 'credit_card' }, { name: 'Smart Access', desc: 'Low fee account for flexible access', icon: 'credit_card' }];

function Account(owner, type) {

  var accountType = void 0;

  switch (typeof type === 'undefined' ? 'undefined' : _typeof(type)) {
    case 'number':
      accountType = accountTypes[type];
      break;
    case 'string':
      accountType = accountTypes.filter(function (item) {
        return item.name === type;
      })[0];
      break;
    default:
      var randomAccountIdx = (0, _helpers.randomNumberBetween)(0, accountTypes.length - 1);
      accountType = accountTypes[randomAccountIdx];
  }

  if (!accountType) {
    throw new Error('Not a valid Account type: \'' + type + '\'');
  }

  var account = {
    id: _uuid2.default.v4(),
    type: accountType.name + ' Account',
    description: accountType.desc,
    icon: accountType.icon,
    createdAt: new Date().toUTCString(),
    updatedAt: null,
    owner: owner,
    balance: 0,
    transactions: []
  };

  return account;
}

exports.default = Account;