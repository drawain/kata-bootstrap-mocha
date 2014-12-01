"use strict";

var Calculator = function() {};

Calculator.prototype.add = function(a, b) {
  return a + b;
};

module.exports = Calculator;