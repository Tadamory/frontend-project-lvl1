import {
  numberRand,
  number1,
  number2,
  numbers,
  operation,
  numbersAndOperation,
  answer,
} from './core';

export const operationRand = () => {
  const oper = numberRand(3);
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
