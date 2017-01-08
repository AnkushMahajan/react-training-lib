import uuid from 'uuid';
import Message from './message';

import { randomNumberBetween } from '../helpers';
import { currentUser, marketingSender, supportSender } from '../users';

// List of potential messages from the bank
const messageThreadTypes = [
  {
    title: `Your Small Business Loan has been approved!`,
    message: `We've reviewed your application and are happy to say we've approved your loan #11234321`,
    sender: supportSender,
  },
  {
    title: `New Offer to help your Business`,
    message: `...`,
    sender: marketingSender,
  },
  {
    title: `Worry less! Activate Google Wallet for Your credit or debit card`,
    message: `...`,
    sender: marketingSender,
  },
  {
    title: `Update to your Monthlfy fees`,
    message: `...`,
    sender: supportSender,
  },
];

function MessageThread(typeIdx = null) {

  let type;

  if (typeIdx) {
    type = messageThreadTypes[typeIdx];
  } else {
    const rndTypeIdx = randomNumberBetween(0, messageThreadTypes.length-1);
    type = messageThreadTypes[rndTypeIdx];
  }

  let title = type.title;
  let initialMessage = type.message;
  let user = type.sender;

  const messageThread = {
    id: uuid.v4(),
    title,
    user, // A thread will always be between the currentUser and the messageThread.user
    messages: [
      Message(user, currentUser, initialMessage)
    ],
    createdAt: new Date().toUTCString(),
    updatedAt: null,
  };

  return messageThread;
}

export default MessageThread;
