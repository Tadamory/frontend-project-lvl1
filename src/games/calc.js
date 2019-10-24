import { cons } from 'hexlet-pairs';
import { playGame } from '../index';
import getRandNumber from '../generator';

const startRange = 1;
const endRange = 10;
const gameCondition = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getRoundData = () => {
  const first = getRandNumber(startRange, endRange);
  const second = getRandNumber(startRange, endRange);
  const operator = operations[getRandNumber(startRange, operations.length - 1)];
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

export default () => playGame(gameCondition, getRoundData);
