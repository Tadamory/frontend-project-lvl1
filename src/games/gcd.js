import { cons, car, cdr } from 'hexlet-pairs';
import { startGame } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const getSortedList = (pair) => {
  if (car(pair) > cdr(pair)) {
    return pair;
  }
  return cons(cdr(pair), car(pair));
};

const getGcd = (numbers) => {
  for (let i = cdr(numbers); i > 0; i -= 1) {
    if ((car(numbers) % i === 0) && (cdr(numbers) % i === 0)) {
      return i;
    }
  }
  return 1;
};

const getRoundCondition = () => () => {
  const startRange = 1;
  const endRange = 20;
  const first = getRandNumber(startRange, endRange);
  const second = getRandNumber(startRange, endRange);
  const condition = `${first} ${second}`;
  const currectAnswer = getGcd(getSortedList(cons(first, second)));
  return cons(condition, currectAnswer);
};

export const preparationGame = () => {
  const gameCondition = 'Find the greatest common divisor of given numbers.';
  startGame(gameCondition, getRoundCondition());
};

export default preparationGame;
