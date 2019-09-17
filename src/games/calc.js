import { cons } from 'hexlet-pairs';
import { main } from '../index';

const getRandNumber = (limit) => Math.floor(Math.random() * limit);

const getRandOperation = () => {
  let oper = '';
  switch (getRandNumber(3)) {
    case 0:
      oper = '+';
      break;
    case 1:
      oper = '-';
      break;
    case 2:
      oper = '*';
      break;
    default:
      oper = '';
      break;
  }
  return oper;
};

const question = (limit) => {
  const result = () => {
    const num1 = getRandNumber(limit);
    const num2 = getRandNumber(limit);
    const oper = getRandOperation();
    const conditionToString = `${num1} ${oper} ${num2}`;

    let currentAnswer = 0;
    switch (oper) {
      case '+':
        currentAnswer = num1 + num2;
        break;
      case '-':
        currentAnswer = num1 - num2;
        break;
      case '*':
        currentAnswer = num1 * num2;
        break;
      default:
        currentAnswer = 0;
        break;
    }

    return cons(conditionToString, currentAnswer);
  };
  return result;
};

export const startGame = () => {
  const condition = 'What is the result of the expression?';
  const limit = 10;
  main(cons(condition, question(limit)));
};

export default startGame;
