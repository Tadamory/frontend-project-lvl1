import { cons } from 'hexlet-pairs';
import { playGame } from '../index';
import getRandNumber from '../generator';

const startRange = 1;
const endRange = 20;
const gameCondition = 'Find the greatest common divisor of given numbers.';

const getGcd = (first, second) => {
  const smallest = (first > second) ? second : first;
  const biggest = (first > second) ? first : second;

  for (let i = biggest; i > 0; i -= 1) {
    if ((smallest % i === 0) && (biggest % i === 0)) {
      return i;
    }
  }
  return 1;
};

const getRoundData = () => {
  const first = getRandNumber(startRange, endRange);
  const second = getRandNumber(startRange, endRange);
  const question = `${first} ${second}`;
  const correctAnswer = getGcd(first, second);
  return cons(question, String(correctAnswer));
};

export default () => console.log(playGame(gameCondition, getRoundData));
