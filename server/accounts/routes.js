const controller = require('./controller');

module.exports = [{
  path: '/accounts',
  auth: {
    required: ['get']
  },
  get: (req) => controller.getAccountsList(),
}, {
  path: '/account/:id',
  auth: {
    required: ['get']
  },
  get: (req) => controller.getAccountById(req.params.id)
},{
  path: '/account/:fromAccount/transfer/:toAccount',
  auth: {
    required: ['get']
  },
  post: (req) => controller.transferMoneyBetweenAccounts(req.params.fromAccount, req.params.toAccount, req)
}];
