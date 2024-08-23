const { expect } = require('chai');
const request = require('request');

describe('Index Page', () => {
  const baseUrl = 'http://localhost:7865';
 
  it('should return status code 200', (done) =>{
    request.get(baseUrl, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart';

  it('should return status code 200 for valid cart ID', (done) => {
    request.get(`${baseUrl}/12`, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for valid cart ID', (done) => {
    request.get(`${baseUrl}/12`, (err, res, body) => {
     expect(body).to.equal('Payment methods for cart 12');
     done();
    });
  });

  it('should return status code 404 for invalid cart ID', (done) => {
    request.get(`${baseUrl}/hello`, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return status code 404 for non-numeric cart ID', (done) => {
    request.get(`${baseUrl}/12.5`, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
