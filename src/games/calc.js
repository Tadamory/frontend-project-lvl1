import {
  cons,
  first,
  second,
  numberRand,
} from './core';

export const make = (number1, number2) => cons(number1, number2);

export const makeOperation = (pair, operation) => cons(pair, operation);

export const makeAnswer = (pair, answer) => cons(pair, answer);

export const number1 = (pair) => first(pair);
export const number2 = (pair) => second(pair);

export const numbers = (pair) => first(pair);
export const operation = (pair) => second(pair);

export const numbersAndOperation = (pair) => first(pair);
export const answer = (pair) => second(pair);

export const resultToString = (pair) => `${number1(numbers(pair))} ${operation(pair)} ${number2(numbers(pair))}`;

export const rand = (limit) => numberRand(limit);

export const operationRand = () => {
  const oper = rand(3);
  switch (oper) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return '';
  }
};

export const isCalc = (pair) => {
  const num1 = number1(numbers(numbersAndOperation(pair)));
  const num2 = number2(numbers(numbersAndOperation(pair)));
  const oper = operation(numbersAndOperation(pair));
  const ans = Number(answer(pair));

  switch (oper) {
    case '+':
      if ((num1 + num2) === ans) {
        return true;
      }
      return false;
    case '-':
      if ((num1 - num2) === ans) {
        return true;
      }
      return false;
    case '*':
      if ((num1 * num2) === ans) {
        return true;
      }
      return false;
    default:
      return '';
  }
};
