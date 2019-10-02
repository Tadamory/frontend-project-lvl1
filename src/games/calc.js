import { cons } from 'hexlet-pairs';
import { main } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const getRandOperator = () => {
  const startRange = 1;
  const operations = ['+', '-', '*'];
  return operations[getRandNumber(startRange, operations.length - 1)];
};

const getCorrectAnswer = () => () => {
  const startRange = 1;
  const endRange = 10;
  const first = getRandNumber(startRange, endRange);
  const second = getRandNumber(startRange, endRange);
  const operator = getRandOperator();
  const expressionToString = `${first} ${operator} ${second}`;

  let expressionResult = null;
  switch (operator) {
    case '+':
      expressionResult = first + second;
      break;
    case '-':
      expressionResult = first - second;
      break;
    case '*':
      expressionResult = first * second;
      break;
    default:
      expressionResult = null;
      break;
  }

  return cons(expressionToString, expressionResult);
};

export const startGame = () => {
  const condition = 'What is the result of the expression?';
  main(condition, getCorrectAnswer());
};

export default startGame;
