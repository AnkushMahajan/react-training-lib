'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fixtures = require('./fixtures');

Object.keys(_fixtures).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fixtures[key];
    }
  });
});

var _instructions = require('./instructions');

Object.keys(_instructions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _instructions[key];
    }
  });
});