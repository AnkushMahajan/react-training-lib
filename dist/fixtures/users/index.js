'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.potentialRecipients = exports.marketingSender = exports.supportSender = exports.currentUser = exports.UserModel = undefined;

var _helpers = require('../helpers');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentUserNames = [['Linus Torvalds', 'linux@linux.com'], ['Richard Stallman', 'stallman@1970s.com'], ['Bjarne Stroustrup', 'bjarne@cpp.com'], ['John D. Carmack', 'carmack@gamez.com']];

function randomCurrentUser() {
  var idx = (0, _helpers.randomNumberBetween)(0, currentUserNames.length - 1);
  var name = currentUserNames[idx][0];
  var email = currentUserNames[idx][0];
  return (0, _user2.default)(name, email);
}

var currentUser = randomCurrentUser();

var supportSender = (0, _user2.default)('Customer Support', 'support@bank.com');

var marketingSender = (0, _user2.default)('Updates & Offers', 'updates@bank.com');

var potentialRecipients = [supportSender, marketingSender];

exports.UserModel = _user2.default;
exports.currentUser = currentUser;
exports.supportSender = supportSender;
exports.marketingSender = marketingSender;
exports.potentialRecipients = potentialRecipients;