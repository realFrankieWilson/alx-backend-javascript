const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 for inpuuts 2.4, and 2.3', () => {
    assert.strictEqual(calculateNumber(2.4, 2.3), 4);
  });
  
  it('should return 6 for inputs 2.5, and 2.5', () => {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('should return 0 for inputs 0.4 and -0.4', () => {
    assert.strictEqual(calculateNumber(0.4, -0.4), 0);
  })

  it('should return -0 for inputs 0-.5 and -0.5', () => {
    assert.strictEqual(calculateNumber(-0.5, -0.5), -0);
  });

  it('should return 1 for inputs 0.5 and 0.4', () => {
    assert.strictEqual(calculateNumber(0.5, 0.4), 1);
  });

  it('should return 4 for inputs 3.9 and 0.1', () => {
    assert.strictEqual(calculateNumber(3.9, 0.1), 4);
  })
})
