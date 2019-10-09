import { cons } from 'hexlet-pairs';
import { startGame } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const startRange = 1;
const endRange = 10;
const gameCondition = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRoundCondition = () => () => {
  const question = getRandNumber(startRange, endRange);
  const currectAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, currectAnswer);
};

export default () => startGame(gameCondition, getRoundCondition());
