import {
  make,
  getFirstNumber,
  getSecondNumber,
  getNumbers,
  getAnswer,
} from './core';

export const gcd = (pair) => {
  const firstNum = getFirstNumber(pair);
  const secondNum = getSecondNumber(pair);

  const num1 = (firstNum > secondNum) ? firstNum : secondNum;
  const num2 = (firstNum > secondNum) ? secondNum : firstNum;
  const mod = num1 % num2;

  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  if (mod === 0) {
    return num2;
  }
  return gcd(make(num2, mod));
};

export const isGcd = (pair) => gcd(getNumbers(pair)) === Number(getAnswer(pair));
