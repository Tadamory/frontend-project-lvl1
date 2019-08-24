import {
  make,
  numbers,
  answer,
  firstNumber,
  secondNumber,
} from './core';

export const gcd = (pair) => {
  const num1 = (firstNumber(pair) > secondNumber(pair)) ? firstNumber(pair) : secondNumber(pair);
  const num2 = (firstNumber(pair) > secondNumber(pair)) ? secondNumber(pair) : firstNumber(pair);
  const mod = num1 % num2;

  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  if (mod === 0) {
    return num2;
  }
  return gcd(make(num2, mod));
};

export const isGcd = (pair) => gcd(numbers(pair)) === Number(answer(pair));
