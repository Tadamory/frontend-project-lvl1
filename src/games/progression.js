import {
  make,
  getRandNumber,
  getHiddenNumber,
  getAnswer,
} from './core';

export const makeProgression = () => {
  const start = getRandNumber(10);
  const step = getRandNumber(5);
  const hiddenIndex = getRandNumber(10);
  const progress = [];
  let iter = start;
  let hiddenNum = 0;

  progress.push(iter);

  for (let i = 1; i < 10; i += 1) {
    iter += step;
    if (i === hiddenIndex) {
      progress.push('..');
      hiddenNum += iter;
    } else {
      progress.push(iter);
    }
  }

  return make(progress, hiddenNum);
};

export const isHidden = (pair) => (Number(getHiddenNumber(pair)) === Number(getAnswer(pair)));
