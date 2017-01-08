import { currentUser } from '../users';
import { randomDateBetween, randomNumberBetween, randomCurrencyBetween } from '../helpers';

import Account from './account';
import Transaction from './transaction';

export function RandomAccount(currentUser, type) {
  const account = Account(currentUser, type);
  const numberOfTransactions = randomNumberBetween(20, 100);

  // First transaction is always en emptry transaction making the balance 0
  account.transactions.push(Transaction(0, true));

  // Generate transactions for the Account
  for (let i = 0; i < numberOfTransactions; i++) {
    const isCredit = !Math.round(Math.random());
    const transactionAmount = isCredit? randomCurrencyBetween(1, 75): randomCurrencyBetween(1, 50);
    const transaction = Transaction(transactionAmount, isCredit);

    account.transactions.unshift(transaction);
  }

  // Override the dates of the transaction to be more natural
  for (let i = 0; i < account.transactions.length; i++ ) {
    const transaction = account.transactions[i];

    // Make every transaction 1 day intervals
    let timestamp = new Date();

    timestamp.setDate(timestamp.getDate() - (i + 1));

    let start = new Date(timestamp);
    let end = new Date(timestamp);

    start.setHours(start.getHours() - 12);
    end.setHours(end.getHours() + 12);
    timestamp = randomDateBetween(start, end);

    // Set timestamp
    transaction.timestamp = timestamp;
  }

  // Sort the Transactions to make sure they're in correct date order
  account.transactions = account.transactions.sort((a,b) => b.timestamp - a.timestamp);

  // Calculate updated account balance based on generated transactions
  for (let i = account.transactions.length-1; i>=0; i--) {
    const transaction = account.transactions[i];

    transaction.balanceBefore = Number(account.balance || 0);

    if (transaction.type === 'credit') {
      account.balance += transaction.amount;
    } else {
      account.balance -= transaction.amount;
    }

    account.balance = parseFloat(account.balance.toFixed(2));
    transaction.balanceAfter = Number(account.balance);
  }

  return account;
}

export function RandomAccountList() {
  const numberOfAccounts = randomNumberBetween(5, 10);
  const accountList = [];

  for (let i = 0; i < numberOfAccounts; i++) {
    accountList.push(
      RandomAccount(currentUser)
    );
  }

  return accountList;
}
