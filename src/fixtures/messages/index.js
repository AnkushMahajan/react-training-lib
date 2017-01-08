import { RandomMessageThreadList } from './randomlyGenerate';

import MessageThread from './messageThread';
import Message from './message';

const propMessageThreads = RandomMessageThreadList();
const propMessageThreadsLimited = propMessageThreads.map(item => Object.assign({}, item))
const propMessageThread = Object.assign({}, propMessageThreads[0]);

// Don't include messages in View model for List view
for (let thread of propMessageThreadsLimited) {
  thread.messages = null;
}

export {
  Message as MessageModel,
  MessageThread as MessageThreadModel,
  propMessageThreads as messageThreads,
  propMessageThreadsLimited as messageThreadsFixture,
  propMessageThread as messageThreadDetailsFixture,
}
