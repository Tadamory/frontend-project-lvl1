import { cons } from 'hexlet-pairs';
import { main } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const makeProgression = (firstPoint, step, length) => {
  const progression = [];
  progression.push(firstPoint);
  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const getCorrectAnswer = () => () => {
  const startRange = 1;
  const endRange = 10;
  const endStepRange = 5;
  const firstPoint = getRandNumber(startRange, endRange);
  const step = getRandNumber(startRange, endStepRange);
  const progression = makeProgression(firstPoint, step, endRange);
  const hidden = getRandNumber(startRange, progression.length - 1);
  const currentAnswer = progression[hidden];

  let conditionToString = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === hidden) {
      conditionToString += '..';
    } else {
      conditionToString += progression[i];
    }
    conditionToString += ' ';
  }

  return cons(conditionToString, currentAnswer);
};

export const startGame = () => {
  const condition = 'What number is missing in the progression?';
  main(condition, getCorrectAnswer());
};

export default startGame;
