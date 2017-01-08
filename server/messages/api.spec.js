const { messageThreads } = require('../../dist/static-fixtures/messages')

const {
  chai,
  describe,
  it,
  server,
  authQueryToken
} = require('../spec.helpers.js')

describe('Messages', () => {
  describe('GET /conversations', () => {
    it('should return list of messageThreads', (done) => {
      chai.request(server)
        .get('/conversations')
        .query(authQueryToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.forEach((item, idx) => {
            item.id.should.be.eql(messageThreads[idx].id)
          })
          done()
        })
    });
  })

  describe('GET /conversation/:id', () => {
    it('should return a single conversation', (done) => {
      const thread = Object.assign({}, messageThreads[0]);

      chai.request(server)
        .get('/conversation/' + thread.id)
        .query(authQueryToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.id.should.be.a('string');
          res.body.id.should.be.eql(thread.id);
          done()
        })
    });
  })

  describe('POST /conversation/:id/message', () => {
    it('should add a new message to a messageThread', (done) => {
      const thread = Object.assign({}, messageThreads[0]);

      chai.request(server)
        .get('/conversation/' + thread.id)
        .query(authQueryToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.id.should.be.a('string');
          res.body.id.should.be.eql(thread.id);
          done()
        })
    });
  })
})
