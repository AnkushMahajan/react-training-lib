import loremIpsum from 'lorem-ipsum';

import { randomNumberBetween } from '../helpers';
import { currentUser } from '../users';

import MessageThread from './messageThread';
import Message from './message';

function RandomMessageThread(loggedInUser) {
  const messageCount = randomNumberBetween(0, 10);
  const messageThread = MessageThread();

  // Fill it with some random messages
  let sender = messageThread.user;
  let reciever = loggedInUser;

  for (let i = 0; i < messageCount; i++) {

    messageThread.messages.push(
      Message(sender, reciever, loremIpsum())
    );

    // 50% chance for conversation to switch to the other person
    if (!randomNumberBetween(0,1)) {
      const temp = sender;

      sender = reciever;
      reciever = temp;
    }
  }

  return messageThread;
}

function RandomMessageThreadList() {
  const threadCount = randomNumberBetween(3, 8);
  const threadList = [];

  // Fill it with some random messages
  for (let i = 0; i < threadCount; i++) {
    threadList.push(
      RandomMessageThread(currentUser)
    );
  }

  return threadList;
}

export {
  RandomMessageThread,
  RandomMessageThreadList,
}
