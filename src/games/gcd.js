import {
  make,
  number1,
  number2,
  numbers,
  answer,
} from './core';

export const gcd = (pair) => {
  const num1 = (number1(pair) > number2(pair)) ? number1(pair) : number2(pair);
  const num2 = (number1(pair) > number2(pair)) ? number2(pair) : number1(pair);
  const modulo = num1 % num2;

  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  if (modulo === 0) {
    return num2;
  }
  return gcd(make(num2, modulo));
};

export const isGcd = (pair) => gcd(numbers(pair)) === Number(answer(pair));
