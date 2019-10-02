import { cons } from 'hexlet-pairs';
import { main } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = () => () => {
  const rangeOfNumbers = 10;
  const number = getRandNumber(rangeOfNumbers);
  const currentAnswer = isEven(number) ? 'yes' : 'no';
  return cons(number, currentAnswer);
};

export const startGame = () => {
  const condition = 'Answer "yes" if number even otherwise answer "no".';
  main(condition, getCorrectAnswer());
};

export default startGame;
