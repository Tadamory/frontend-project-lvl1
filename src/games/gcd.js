import { cons, car, cdr } from 'hexlet-pairs';
import { main } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const getOrderedNumbers = (pair) => {
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

const getCorrectAnswer = () => () => {
  const startRange = 1;
  const endRange = 20;
  const first = getRandNumber(startRange, endRange);
  const second = getRandNumber(startRange, endRange);
  const numbersToString = `${first} ${second}`;
  const currentAnswer = getGcd(getOrderedNumbers(cons(first, second)));
  return cons(numbersToString, currentAnswer);
};

export const startGame = () => {
  const condition = 'Find the greatest common divisor of given numbers.';
  main(condition, getCorrectAnswer());
};

export default startGame;
