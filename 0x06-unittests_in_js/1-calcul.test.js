// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should return the sum of rounded values', () => {
      const result = calculateNumber('SUM', 1.4, 4.5);
      assert.strictEqual(result, 6);
    });
  });

  describe('subtract', () => {
    it('should return the difference of rounded values', () => {
      const result = calculateNumber('SUBTRACT', 1.4, 4.5);
      assert.strictEqual(result, -4);
    });
  });

  describe('divide', () => {
    it('should return the division of rounded values', () => {
      const result = calculateNumber('DIVIDE', 1.4, 4.5);
      assert.strictEqual(result, 0.2);
    });

    it('should return "Error" when dividing by zero', () => {
      const result = calculateNumber('DIVIDE', 1.4, 0);
      assert.strictEqual(result, 'Error');
    });
  });

  describe('edge cases', () => {
    it('should throw an error for invalid operation type', () => {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), {
        message: /Invalid operation type/,
      });
    });
  });
});
