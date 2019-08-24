import { getFirstNumber, getAnswer } from './core';

export const isEven = (pair) => {
  if ((getFirstNumber(pair) % 2 === 0 && getAnswer(pair) === 'yes') || (getFirstNumber(pair) % 2 !== 0 && getAnswer(pair) === 'no')) {
    return true;
  }
  return false;
};

export default isEven;
