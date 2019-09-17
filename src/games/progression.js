import { cons } from 'hexlet-pairs';
import { main } from '../index';

const getRandNumber = (limit) => Math.floor(Math.random() * limit) + 1;

const question = (limit1, limit2) => {
  const result = () => {
    const start = getRandNumber(limit1);
    const step = getRandNumber(limit2);
    const hiddenIndex = getRandNumber(limit1);
    let conditionToString = '';
    const progress = [];
    let iter = start;
    let currentAnswer = 0;

    progress.push(iter);
    for (let i = 1; i < 10; i += 1) {
      iter += step;
      if (i === hiddenIndex) {
        progress.push('..');
        currentAnswer = iter;
      } else {
        progress.push(iter);
      }
    }

    for (let i = 0; i < limit1; i += 1) {
      conditionToString += progress[i];
      conditionToString += ' ';
    }

    return cons(conditionToString, currentAnswer);
  };
  return result;
};

export const startGame = () => {
  const condition = 'What number is missing in the progression?';
  const limit1 = 10;
  const limit2 = 5;

  main(cons(condition, question(limit1, limit2)));
};

export default startGame;
