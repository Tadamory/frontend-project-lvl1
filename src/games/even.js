import { number1, answer } from './core';

export const isEven = (pair) => {
  if ((number1(pair) % 2 === 0 && answer(pair) === 'yes') || (number1(pair) % 2 !== 0 && answer(pair) === 'no')) {
    return true;
  }
  return false;
};

export default isEven;
