import { cons } from 'hexlet-pairs';
import { startGame } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const makeProgression = (firstPoint, step, length) => {
  const progression = [];
  progression.push(firstPoint);
  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const getRoundCondition = () => () => {
  const startRange = 1;
  const endRange = 10;
  const endStepRange = 5;
  const firstPoint = getRandNumber(startRange, endRange);
  const step = getRandNumber(startRange, endStepRange);
  const progression = makeProgression(firstPoint, step, endRange);
  const hidden = getRandNumber(startRange, progression.length - 1);
  const currectAnswer = progression[hidden];

  let condition = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === hidden) {
      condition += '..';
    } else {
      condition += progression[i];
    }
    condition += ' ';
  }

  return cons(condition, currectAnswer);
};

export const preparationGame = () => {
  const gameCondition = 'What number is missing in the progression?';
  startGame(gameCondition, getRoundCondition());
};

export default preparationGame;
