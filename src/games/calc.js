import { cons } from 'hexlet-pairs';
import { startGame } from '../index';
import getRandNumber from '../generator';

const startRange = 1;
const endRange = 10;
const gameCondition = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getRoundCondition = () => () => {
  const first = getRandNumber(startRange, endRange);
  const second = getRandNumber(startRange, endRange);
  const randIndex = getRandNumber(startRange, operations.length - 1);
  const operator = operations[randIndex];
  const question = `${first} ${operator} ${second}`;

  let correctAnswer;
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

  return cons(question, String(correctAnswer));
};

export default () => startGame(gameCondition, getRoundCondition());
