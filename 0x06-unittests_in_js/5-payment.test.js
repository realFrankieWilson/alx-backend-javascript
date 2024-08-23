const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPay = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogStub;

  beforeEach(() => {
    consoleLogStub = sinon.spy(console, 'log'); // Spy on console.log
  });

  afterEach(() => {
    consoleLogStub.restore(); // Restore console.log
  });

  it('should log the correct total for (100, 20)', () => {
    sendPay(100, 20);
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct total for (10, 10)', () => {
    sendPay(10, 10);
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith('The total is: 20')).to.be.true;
  });
});
