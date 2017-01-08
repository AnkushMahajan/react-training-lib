const { generateToken } = require('./helper');
const { currentUser } = require('../../dist/static-fixtures/users');

// Actions
function getCurrentUser() {
  return currentUser;
}

function loginUser() {
  // create token for static current user
	const token = generateToken(currentUser)

  return {token};
}

function logoutUser() {
  return {success: true};
}

module.exports = {
  loginUser,
  logoutUser,
  getCurrentUser,
}
