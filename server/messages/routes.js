const controller = require('./controller');

const conversationMethods = [{
  path: '/conversations',
  auth: {
    required: ['get']
  },
  get: (req) => controller.getConversations(),
}, {
  path: '/conversation/:id',
  auth: {
    required: ['get']
  },
  get: (req) => controller.getConversationById(req.params.id),
}];

const messageMethods = [{
  path: '/conversation/:conversationId/message',
  auth: {
    required: ['post']
  },
  post: (req) => controller.sendMessageToConversation(req.params.conversationId, req.body),
  put: (req) => controller.updateMessageContent(req.params.conversationId, req.body),
}];

module.exports = [
  ...conversationMethods,
  ...messageMethods,
];
