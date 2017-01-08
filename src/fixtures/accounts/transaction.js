import uuid from 'uuid';

function Transaction(amount, isCredit) {
  const transaction = {
    id: uuid.v4(),
    type: isCredit? 'credit': 'debit',
    timestamp: new Date(),
    currency: 'AUD',
    amount,
  }
  return transaction;
}

export default Transaction;
