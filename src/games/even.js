import { cons } from 'hexlet-pairs';
import { startGame } from '../index';
import getRandNumber from '../generator';

const startRange = 1;
const endRange = 10;
const gameCondition = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const question = getRandNumber(startRange, endRange);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, String(correctAnswer));
};

export default () => startGame(gameCondition, getRoundData);
