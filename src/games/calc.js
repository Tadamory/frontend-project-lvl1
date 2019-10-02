import { cons } from 'hexlet-pairs';
import { startGame } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const getRandOperator = () => {
  const startRange = 1;
  const operations = ['+', '-', '*'];
  return operations[getRandNumber(startRange, operations.length - 1)];
};

const getRoundCondition = () => () => {
  const startRange = 1;
  const endRange = 10;
  const first = getRandNumber(startRange, endRange);
  const second = getRandNumber(startRange, endRange);
  const operator = getRandOperator();
  const condition = `${first} ${operator} ${second}`;

  let correctAnswer = null;
  switch (operator) {
    case '+':
      correctAnswer = first + second;
      break;
    case '-':
      correctAnswer = first - second;
      break;
    case '*':
      correctAnswer = first * second;
      break;
    default:
      correctAnswer = null;
      break;
  }

  return cons(condition, correctAnswer);
};

export const preparationGame = () => {
  const gameCondition = 'What is the result of the expression?';
  startGame(gameCondition, getRoundCondition());
};

export default preparationGame;
