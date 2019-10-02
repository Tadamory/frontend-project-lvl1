import { cons } from 'hexlet-pairs';
import { startGame } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const startRange = 1;
const endRange = 10;
const endStepRange = 5;
const gameCondition = 'What number is missing in the progression?';

const makeProgression = () => {
  const start = getRandNumber(startRange, endRange);
  const step = getRandNumber(startRange, endStepRange);
  const progression = [];
  for (let i = 0; i < length - 1; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getRoundCondition = () => () => {
  const progression = makeProgression();
  const hidden = getRandNumber(startRange, progression.length - 1);
  const currectAnswer = progression[hidden];

  let condition = '';
  for (let i = 0; i < progression.length; i += 1) {
    condition = (i === hidden) ? `${condition}.. ` : `${condition}${progression[i]} `;
  }

  return cons(condition, currectAnswer);
};

export const preparationGame = () => {
  startGame(gameCondition, getRoundCondition());
};

export default preparationGame;
