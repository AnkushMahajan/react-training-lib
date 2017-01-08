const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET || 'BLANK_SECRET';

function getToken (req) {
  // From Header or query string
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
}

const processRequestJwt = expressJwt({
  secret,
  getToken
});

const generateToken = (user) => jwt.sign(user, secret)


module.exports = {
  processRequestJwt,
  generateToken
}
