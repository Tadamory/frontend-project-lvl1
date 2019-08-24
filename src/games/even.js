import { answer, firstNumber } from './core';

export const isEven = (pair) => {
  if ((firstNumber(pair) % 2 === 0 && answer(pair) === 'yes') || (firstNumber(pair) % 2 !== 0 && answer(pair) === 'no')) {
    return true;
  }
  return false;
};

export default isEven;
