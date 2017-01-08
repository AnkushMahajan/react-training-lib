import Account from './account';
import Transaction from './transaction';

import { RandomAccountList } from './randomlyGenerate';

// Generate server
const propAccounts = RandomAccountList();

// Generate fixtures
const propAccountsLimited = propAccounts.map((item) => Object.assign({}, item))
const propAccount = Object.assign({}, propAccountsLimited[0]);

// Don't include transactions in View model for List view
for (let acc of propAccountsLimited) {
  acc.transactions = null;
}

export {
  Account as AccountModel,
  Transaction as TransactionModel,
  propAccounts as accountsList,
  propAccountsLimited as accountsListFixture,
  propAccount as accountDetailsFixture,
}
