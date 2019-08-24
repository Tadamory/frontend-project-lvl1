import {
  make,
  hiddenNumber,
  answer,
  numberRand,
} from './core';

export const makeProgression = () => {
  const start = numberRand(10);
  const step = numberRand(5);
  const hiddenIndex = numberRand(10);
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

export const isHidden = (pair) => (Number(hiddenNumber(pair)) === Number(answer(pair)));
