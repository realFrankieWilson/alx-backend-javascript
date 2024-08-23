const { expect } = require('chai');
const getPay = require('./6-payment_token');
const { response } = require('express');

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response when success is true', (done) => {
    getPay(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API', });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should do nothing when success is false', (done) => {
    getPay(false)
      .then((response) => {
        expect(response).to.be.undefined;
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
