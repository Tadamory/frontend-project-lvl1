import { cons } from 'hexlet-pairs';
import { startGame } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const isEven = (number) => number % 2 === 0;

const getRoundCondition = () => () => {
  const startRange = 1;
  const endRange = 10;
  const condition = getRandNumber(startRange, endRange);
  const currectAnswer = isEven(condition) ? 'yes' : 'no';
  return cons(condition, currectAnswer);
};

export const preparationGame = () => {
  const gameCondition = 'Answer "yes" if number even otherwise answer "no".';
  startGame(gameCondition, getRoundCondition());
};

export default preparationGame;
