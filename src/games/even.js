import { cons } from 'hexlet-pairs';
import { main } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = () => () => {
  const startRange = 1;
  const endRange = 10;
  const number = getRandNumber(startRange, endRange);
  const currentAnswer = isEven(number) ? 'yes' : 'no';
  return cons(number, currentAnswer);
};

export const startGame = () => {
  const condition = 'Answer "yes" if number even otherwise answer "no".';
  main(condition, getCorrectAnswer());
};

export default startGame;
