import uuid from 'uuid';

function Message(sender, reciever, msg) {
  const message = {
    id: uuid.v4(),
    text: msg || '',
    createdAt: new Date().toUTCString(),
    updatedAt: null,
    sender,
    reciever
  };

  return message;
}

export default Message;
