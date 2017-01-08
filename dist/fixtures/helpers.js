"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomNumberBetween = randomNumberBetween;
exports.randomCurrencyBetween = randomCurrencyBetween;
exports.randomDateBetween = randomDateBetween;
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomCurrencyBetween(min, max) {
  var num = (Math.random() * (max - min + 1) + min).toFixed(2);
  return parseFloat(num, 10);
}

function randomDateBetween(start, end) {
  var newDateUnix = randomNumberBetween(start.getTime(), end.getTime());
  return new Date(newDateUnix);
}