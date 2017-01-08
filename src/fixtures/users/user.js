import uuid from 'uuid';

function User(name, email) {
  const user = {
    id: uuid.v4(),
    createdAt: new Date().toUTCString(),
    updatedAt: null,
    email,
    name,
  };

  return user;
}

export default User;
