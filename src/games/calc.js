import {
  getRandNumber,
  getFirstNumber,
  getNumbers,
  getNumbersAndOperation,
  getSecondNumber,
  getOperation,
  getAnswer,
} from './core';

export const getRandOperation = () => {
  const oper = getRandNumber(3);
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
  const num1 = getFirstNumber(getNumbers(getNumbersAndOperation(pair)));
  const num2 = getSecondNumber(getNumbers(getNumbersAndOperation(pair)));
  const oper = getOperation(getNumbers(pair));
  const ans = Number(getAnswer(pair));

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
