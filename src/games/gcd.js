import { cons, car, cdr } from 'hexlet-pairs';
import { startGame } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const startRange = 1;
const endRange = 20;
const gameCondition = 'Find the greatest common divisor of given numbers.';

const getGcd = (first, second) => {
  const SortedNumbers = (first > second) ? cons(first, second) : cons(second, first);

  for (let i = cdr(SortedNumbers); i > 0; i -= 1) {
    if ((car(SortedNumbers) % i === 0) && (cdr(SortedNumbers) % i === 0)) {
      return i;
    }
  }
  return 1;
};

const getRoundCondition = () => () => {
  const first = getRandNumber(startRange, endRange);
  const second = getRandNumber(startRange, endRange);
  const condition = `${first} ${second}`;
  const currectAnswer = getGcd(first, second);
  return cons(condition, currectAnswer);
};

export const preparationGame = () => {
  startGame(gameCondition, getRoundCondition());
};

export default preparationGame;
