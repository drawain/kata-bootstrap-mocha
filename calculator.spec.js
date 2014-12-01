"use strict";

var Calculator = require('./calculator');
var expect = require('chai').expect;

describe('Calculator', function() {
  describe('#add', function() {
    it('should return the sum of the given two number', function() {
      var calculator = new Calculator();
      var result = calculator.add(1, 2);
      expect(result).to.equal(3);
    });
  });
});