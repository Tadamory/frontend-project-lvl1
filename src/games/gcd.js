import { cons } from 'hexlet-pairs';
import { startGame } from '../index';
import getRandNumber from '../generator';

const startRange = 1;
const endRange = 20;
const gameCondition = 'Find the greatest common divisor of given numbers.';

const getGcd = (first, second) => {
  const getSmallest = () => ((first > second) ? second : first);
  const getBiggest = () => ((first > second) ? first : second);

  for (let i = getBiggest(); i > 0; i -= 1) {
    if ((getSmallest() % i === 0) && (getBiggest() % i === 0)) {
      return i;
    }
  }
  return 1;
};

const getRoundCondition = () => () => {
  const first = getRandNumber(startRange, endRange);
  const second = getRandNumber(startRange, endRange);
  const question = `${first} ${second}`;
  const currectAnswer = getGcd(first, second);
  return cons(question, currectAnswer);
};

export default () => startGame(gameCondition, getRoundCondition());
