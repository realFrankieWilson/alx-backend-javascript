// 2-ccalcul.test.js
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const calculate = require('./2-calcul_chai');

describe('Calculate Function Tests', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculate('SUM', 1.4, 2.6)).to.equal(4);
      expect(calculate('SUM', 1.5, 2.5)).to.equal(5);
    });

  });
  
  describe('SUBTRACT', () => {
    it('should return the difference of two rounded numbers', () => {
      expect(calculate('SUBTRACT', 5.7, 2.3)).to.equal(4);
      expect(calculate('SUBTRACT', 3.5, 1.5)).to.equal(2);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      expect(calculate('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculate('DIVIDE', 9.5, 2.5)).to.equal(3.3333333333333335);
    });
    it('should return "Error" when divding by zero', () => {
      expect(calculate('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculate('DIVIDE', 1.4, 0.5)).to.equal(1);
    });
  });

  describe('Invalid Operation Type', () => {
    it('should throw an error for invalide opeation type', () => {
      expect(() => calculate('INVALID', 1, 2).to.thow(/Invalid operation/));
    });
  });
});
