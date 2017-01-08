const { currentUser } = require('../../dist/static-fixtures/users');

const {
  chai,
  describe,
  it,
  server,
  authHeader,
  authQueryToken
} = require('../spec.helpers.js')

describe('Auth', () => {
  describe('GET /auth/me', () => {
    it('should return current user', (done) => {
      chai.request(server)
        .get('/auth/me')
        .query(authQueryToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.be.eql(currentUser);
          done();
        });
    });
  })

  describe('POST /auth/login', () => {
    it('should return jwt token', (done) => {
      chai.request(server)
        .post('/auth/login')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.token.should.be.a('string');
          done();
        });
    });
  })

  describe('POST /auth/logout', () => {
    it('should log out user', (done) => {
      chai.request(server)
        .post('/auth/logout')
        .query(authQueryToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.success.should.be.eql(true);
          done();
        });
    });
  })
})
