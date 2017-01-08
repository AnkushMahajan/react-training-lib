import { randomNumberBetween } from '../helpers';
import User from './user';

const currentUserNames = [
  ['Linus Torvalds', 'linux@linux.com'],
  ['Richard Stallman', 'stallman@1970s.com'],
  ['Bjarne Stroustrup', 'bjarne@cpp.com'],
  ['John D. Carmack', 'carmack@gamez.com'],
];

function randomCurrentUser() {
  const idx = randomNumberBetween(0, currentUserNames.length-1);
  const name = currentUserNames[idx][0];
  const email = currentUserNames[idx][0];
  return User(name, email);
}

const currentUser = randomCurrentUser();

const supportSender = User('Customer Support', 'support@bank.com');

const marketingSender = User('Updates & Offers', 'updates@bank.com');

const potentialRecipients = [
  supportSender,
  marketingSender,
];

export {
  User as UserModel,
  currentUser,
  supportSender,
  marketingSender,
  potentialRecipients,
};
