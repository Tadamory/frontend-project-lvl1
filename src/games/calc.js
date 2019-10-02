import { cons } from 'hexlet-pairs';
import { main } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const getRandOperator = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandNumber(operations.length - 1)];
};

const getCorrectAnswer = () => () => {
  const rangeOfNumbers = 10;
  const first = getRandNumber(rangeOfNumbers);
  const second = getRandNumber(rangeOfNumbers);
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
