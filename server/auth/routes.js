const controller = require('./controller');

module.exports = [{
  path: '/auth/login',
  post: (req) => controller.loginUser()
}, {
  path: '/auth/logout',
  auth: {required: ['post']},
  post: (req) => controller.logoutUser()
}, {
  path: '/auth/me',
  auth: {required: ['get']},
  get: (req) => controller.getCurrentUser()
}]
