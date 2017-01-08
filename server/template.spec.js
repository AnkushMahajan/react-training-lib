// NOTE: This file is a generic template to use to create new api test files.
// the only things placed in here should be the bare minimum example of how to create a test file.

const {
  chai,
  describe,
  it,
  server
} = require('./spec.helpers.js')

describe('Server', () => {
  describe('GET /', () => {
    it('should return OK', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.server.should.be.eql('OK');
          done();
        });
    });
  })
})
