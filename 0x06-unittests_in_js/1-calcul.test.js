// 1-ccalcul.test.js
const assert = require('assert');
const calculate = require('./1-calcul');

describe('Calculate Function Tests', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      assert.equal(calculate('SUM', 1.4, 2.6), 4);
      assert.equal(calculate('SUM', 1.5, 2.5), 5);
    });
  });
  
  describe('SUBTRACT', () => {
    it('should return the difference of two rounded numbers', () => {
      assert.equal(calculate('SUBTRACT', 5.7, 2.3), 4);
      assert.equal(calculate('SUBTRACT', 3.5, 1.5), 2);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      assert.equal(calculate('DIVIDE', 1.4, 4.5), 0.2);
      assert.equal(calculate('DIVIDE', 9.5, 2.5), 3.3333333333333335);
    });
    it('should return "Error" when divding by zero', () => {
      assert.equal(calculate('DIVIDE', 1.4, 0), 'Error');
      assert.equal(calculate('DIVIDE', 1.4, 0.5), 1);
    });
  });

  describe('Invalid Operation Type', () => {
    it('should throw ann error for invalide opeation type', () => {
      assert.throws(() => calculate('INVALID', 1, 2), /Invalid operation/);
    });
  });
});
