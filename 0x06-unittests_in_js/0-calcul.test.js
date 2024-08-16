// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('hould return sum of a rounded a and b', () => {
    assert.equal(calculateNumber(2.5, 2.5), 6);
  });

  it('should round down for values less than 0.5', () => {
    assert.equal(calculateNumber(2.4, 2.4), 4);
    assert.equal(calculateNumber(-2.4, -2.4), -4);
  });

  it('should round up for values equal or greater than 0.5', () => {
    assert.equal(calculateNumber(2.5, 2.5), 6);
    assert.equal(calculateNumber(2.6, 2.6), 6);
    assert.equal(calculateNumber(-2.5, -2.5), -4);
  });

  it('should handle negative numbers correctly', () => {
    assert.equal(calculateNumber(-2.5, -3.5), -5);
    assert.equal(calculateNumber(-2.4, -3.4), -5);

  });

  it('should return the sum when both numbers are integers', () => {
    assert.equal(calculateNumber(2, 3), 5);
  });

  it('should return the sum when one number is zero', () => {
    assert.equal(calculateNumber(0, 2.5), 3);
    assert.equal(calculateNumber(2.5, 0), 3);
  });

  it('should return 0 when both numbers are zero', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });
});
