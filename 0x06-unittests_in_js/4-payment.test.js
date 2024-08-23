const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPay = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let consoleLogStub;

  beforeEach(() => {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogStub = sinon.spy(console, 'log');
  });

  afterEach(() => {
    stub.restore();
    consoleLogStub.restore();
  });

  it('should call Utils.calculateNumber with correct arguments for (100, 20)', () => {
    sendPay(100, 20);

    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith('The total is: 10')).to.be.true;
  });

  it('should call Utils.calculateNumber with correct arguments for (50, 30)', () => {
    sendPay(50, 30);
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 50, 30)).to.be.true;
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith('The total is: 10')).to.be.true;
  });

  it('should call Utils.calculateNumber with correct arguments for (0, 0)', () => {
    sendPay(0, 0);

    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 0, 0)).to.be.true;
  });

  it('should call Utils.calculateNumber with correct arguments for (-10, 10)', () => {
    sendPay(-10, 10);
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', -10, 10)).to.be.true;
    expect(consoleLogStub.calledOnce).to.be.true;
  });
});
