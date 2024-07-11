const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
this.timeout(5000);
  suite('Tests to /api/convert', function () {
    test('Test get request with correct input "10L" ', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=10L')
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 10);
            assert.equal(res.body.initUnit, 'L');
            assert.equal(res.body.returnNum, 2.64172);
            assert.equal(res.body.returnUnit, 'gal');
            assert.equal(res.body.string, '10 liters converts to 2.64172 gallons');
          done();
        });
    });
    test('Test get request with invalid input "32g" ', function (done) {
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=32g')
          .end(function (err, res) {
              assert.equal(res.status, 200);
              assert.equal(res.body, 'invalid unit')
            done();
          });
      });
      test('Test get request with invalid input "3/7.2/4kg" ', function (done) {
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=3/7.2/4kg')
          .end(function (err, res) {
              assert.equal(res.status, 200);
              assert.equal(res.body, 'invalid number')
            done();
          });
      });
      test('Test get request with invalid input "3/7.2/4kilomegagram" ', function (done) {
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=3/7.2/4kilomegagram')
          .end(function (err, res) {
              assert.equal(res.status, 200);
              assert.equal(res.body, 'invalid number and unit')
            done();
          });
      });
      test('Test get request with correct input "kg" ', function (done) {
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=kg')
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 1);
            assert.equal(res.body.initUnit, 'kg');
            assert.equal(res.body.returnNum, 2.20462);
            assert.equal(res.body.returnUnit, 'lbs');
            assert.equal(res.body.string, '1 kilograms converts to 2.20462 pounds');
            done();
          });
      });
  });
});
