const { accountsList } = require('../../dist/static-fixtures/accounts')

const {
  chai,
  describe,
  it,
  server,
  authQueryToken
} = require('../spec.helpers.js')

describe('Accounts', () => {
  describe('GET /accounts', () => {
    it('should return list of accounts', (done) => {
      chai.request(server)
        .get('/accounts')
        .query(authQueryToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.forEach((item, idx) => {
            item.id.should.be.a('string');
            item.id.should.be.eql(accountsList[idx].id)
          })
          done();
        });
    });
  })

  describe('GET /account/:id', () => {
    it('should return a specific account', () => {
      const account = accountsList[0];

      chai.request(server)
        .get('/account/' + account.id)
        .query(authQueryToken)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.id.should.be.a('string')
          res.body.id.should.be.eql(account.id)
        })
    });
  })

  // describe('POST /account/:id/transfer/:id', () => {
  //   it('should should transfer money between accounts', () => {
  //     false.should.equal(true)
  //   });
  // })
})
