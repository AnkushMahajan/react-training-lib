const { accountsList } = require('../../dist/static-fixtures/accounts')

// State
const accounts = [...accountsList];

// Actions
function getAccountsList() {
  return accounts.map(acc => {
    let accCopy = Object.assign({}, acc)
    delete accCopy.transactions;
    return accCopy;
  });
}

function getAccountById(accId) {
  return accounts.filter((acc) => acc.id === accId);
}

function transferMoneyBetweenAccounts(from, to, req) {
  // TODO: implement creating a new transaction for each account
  console.log(req)
  if (!req.body.amount || req.body.amount > 100) {
    return {"error": "insufficient funds"};
  } else {
    return {status: "ok"}
  }
}

module.exports = {
  getAccountsList,
  getAccountById,
  transferMoneyBetweenAccounts
}
