const assert = require('assert');
const calculate = require('./1-calcul');

const a = 2.5
const b = 1.5;
const s = 'SUM';
const d = 'DIVIDE';
const sb = 'SUBTRACT';


describe('Calculate Function Tests', () => {
  describe(s, () => {
    it('should return the sum of two rounded numbers', () => {
      assert.equal(calculate(s, a, b), 5);
    });
  });

  describe(sb, () => {
    it('should return the difference of two rounded numbers', () => {
      assert.equal(calculate(sb, a, b), 1);
    });
  });

  describe(d, () => {
    it('should return the division of two rounded numbers', () => {
      assert.equal(calculate(d, a, b), 1.5);
    });
    it('should return "Error" when dividing by zero', () => {
      assert.equal(calculate(d, a, 0), 'Error');
    });
  });

  describe('Invalid Operation Type', () => {
    it('should throw an error for invalid operation type', () => {
      assert.throws(() => calculate('INVALID', a, b), /Invalid operation type/);
    });
  });
});
