const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

const a = 2.5
const b = 1.5;
const s = 'SUM';
const d = 'DIVIDE';
const sb = 'SUBTRACT';

describe('Calculate Function Tests', () => {
  describe(s, () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculateNumber(s, a, b)).to.equal(5);
    });
  });

  describe(sb, () => {
    it('should return the difference of two rounded numbers', () => {
      expect(calculateNumber(sb, a, b)).to.equal(1);
    });
  });

  describe(d, () => {
    it('should return the division of two rounded numbers', () => {
      expect(calculateNumber(d, a, b)).to.equal(1.5);
    });
    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber(d, a, 0)).to.equal('Error');
    });
  });

  describe('Invalid Operation Type', () => {
    it('should throw an error for invalid operation type', () => {
      expect(() => calculateNumber('INVALID', 1, 2)).to.throw(/Invalid operation type/);
    });
  });
});
