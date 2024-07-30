// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return the sum of two positive values', function () {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it('should return the sum of one positive value and one negtive value', function () {
    const result = calculateNumber(1, -5);
    assert.strictEqual(result, -4);
  });

  it('should return the sum of rounded values of one negative and one positive number', function () {
    const result = calculateNumber(1.5, -3);
    assert.strictEqual(result, -1);
  });

  it('should return the sum of rounded values of two negative numbers', function () {
    const result = calculateNumber(-1.5, -2.8);
    assert.strictEqual(result, -4);
  });

  it('should return the sum of rounded values of two positive numbers', function () {
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });

  it('should handle very large positive integers', function () {
    const result = calculateNumber(1e12, 1e12);
    assert.strictEqual(result, 2e12);
    // 1,000,000,000,000 + 1,000,000,000,000
  });

  it('should handle very larg negative integers', function () {
    const result = calculateNumber(-1e12, -1e12);
    assert.strictEqual(result, -2e12);
    // -1,000,000,000,0000 + -1,000,000,000,000
  });

  it('should return zero when both arguments are zero', function () {
    const result = calculateNumber(0, 0);
    assert.strictEqual(result, 0);
  });

  it('should handle a mix of larg positive and negative integers', function () {
    const result = calculateNumber(1e12, -1e12);
    assert.strictEqual(result, 0);
    // 1,000,000,000,000 + -1,000,000,000,000
  });

  it('should handle minimum safe integer values', function () {
    const result = calculateNumber(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    assert.strictEqual(result, Number.MIN_SAFE_INTEGER * 2);
  });

  it('should handle maximum safe integer values', function () {
    const result = calculateNumber(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    assert.strictEqual(result, Number.MAX_SAFE_INTEGER * 2);
  });
})