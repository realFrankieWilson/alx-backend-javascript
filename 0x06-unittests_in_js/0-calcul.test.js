const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded number', () => {
    assert.equal(calculateNumber(2.5, 2.5), 6);
  });
  it('should return the sum when both numbers are negative', () => {
    assert.equal(calculateNumber(-2.5, -3.5), -5);
  });
  it('should return the correct sum when one number is negative', () => {
    assert.equal(calculateNumber(-2.5, 3.5), 2);
  });
  it('shouldd return the sum when both numbers are positive integers', () => {
    assert.equal(calculateNumber(2, 3), 5);
  });
  it('should return the sum when one number is zero', () => {
    assert.equal(calculateNumber(0, 2.5), 3);
    assert.equal(calculateNumber(4.5, 0), 5);
  });
  it('should return 0 when both numbers are zero', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it('should correctly round numbers', () => {
    assert.equal(calculateNumber(2.4, 2.9), 5);
    assert.equal(calculateNumber(-2.5, -11.1), -13);
  });
})
