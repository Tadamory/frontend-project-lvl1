import { getFirstNumber, getAnswer } from './core';

export const isPrime = (pair) => {
  const num = getFirstNumber(pair);
  const ans = getAnswer(pair);
  let result = true;

  if (num <= 2) {
    result = true;
  } else if (num % 2 === 0) {
    result = false;
  } else {
    const q = Math.round(Math.sqrt(num));
    for (let i = 3; i < q + 1; i += 1) {
      if (num % i === 0) {
        result = false;
        break;
      }
    }
  }

  if ((result && ans === 'yes') || (!result && ans === 'no')) {
    return true;
  }
  return false;
};

export default isPrime;
