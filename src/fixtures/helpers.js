export function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomCurrencyBetween(min, max) {
  const num = (Math.random() * (max - min + 1) + min).toFixed(2);
  return parseFloat(num, 10);
}

export function randomDateBetween(start, end) {
  const newDateUnix = randomNumberBetween(start.getTime(), end.getTime());
  return new Date(newDateUnix);
}
