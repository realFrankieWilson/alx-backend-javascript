// 3-payment.test.js
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const Utils = require('./utils');
const sendPaymentToRequestApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;
  
  beforeEach(() => {
    // Creates a spy for the calculator method
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the original method
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM type and correct parameters', () => {
    const logSpy = sinon.spy(console, 'log');

    sendPaymentToRequestApi(100, 20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledWith('The total is: 120')).to.be.true;

    logSpy.restore();
  });
});
