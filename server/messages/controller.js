const { MessageModel } = require('../../dist/fixtures/messages')

const { messageThreads } = require('../../dist/static-fixtures/messages')
const { currentUser } = require('../../dist/static-fixtures/users')

// State
const conversations = [...messageThreads];

// Actions
function getConversations() {
  return conversations.map(convo => {
    const convoCopy = Object.assign({}, convo)
    convoCopy.messages = null
    return convoCopy;
  });
}

function getConversationById(convoId) {
  return conversations.find((convo) => convo.id === convoId);
}

function sendMessageToConversation(convoId, msg) {

  const convo = getConversationById(convoId)
  const newMsg = MessageModel(currentUser, convo.user, msg && msg.text)

  convo.messages.push(newMsg);

  return newMsg;
}

function updateMessageContent(convoId, msg) {
  const convo = getConversationById(convoId)
  const message = convo.messages.find(m => m.id === msg.id)

  if (message && msg.text) {
    message.text = msg.text
    message.updatedAt = new Date().toUTCString()
  }

  return message;
}

module.exports = {
  getConversations,
  getConversationById,
  sendMessageToConversation,
  updateMessageContent,
}
