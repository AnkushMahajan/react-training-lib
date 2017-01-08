import uuid from 'uuid';

import { randomNumberBetween } from '../helpers';

// List of potential types of bank accounts
const accountTypes = [
  {name: 'Everyday', desc: 'A bank account for everyday access'},
  {name: 'Savings', desc: 'Flexible savings account'},
  {name: 'Personal', desc: '...'},
  {name: 'Investment', desc: '...', icon: 'business_center'},
  {name: 'Term Deposit', desc: '...', icon: 'business_center'},
  {name: 'Kids Banking', desc: 'Help make banking fun for kids!', icon: 'child_care'},
  {name: 'Visa Debit', desc: 'Simple visa debit access account', icon: 'credit_card'},
  {name: 'Smart Access', desc: 'Low fee account for flexible access', icon: 'credit_card'},
];

function Account(owner, type) {

  let accountType;

  switch (typeof type) {
    case 'number':
      accountType = accountTypes[type]
      break;
    case 'string':
      accountType = accountTypes.filter((item) => item.name === type)[0]
      break;
    default:
      let randomAccountIdx = randomNumberBetween(0, accountTypes.length-1);
      accountType = accountTypes[randomAccountIdx]
  }

  if (!accountType) {
    throw new Error(`Not a valid Account type: '${type}'`);
  }

  const account = {
    id: uuid.v4(),
    type: accountType.name + ' Account',
    description: accountType.desc,
    icon: accountType.icon,
    createdAt: new Date().toUTCString(),
    updatedAt: null,
    owner,
    balance: 0,
    transactions: []
  }

  return account;
}

export default Account;
