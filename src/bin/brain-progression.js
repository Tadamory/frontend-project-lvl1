#!/usr/bin/env node

import { putWelcome, getName, getAnswer } from '../games/questions';
import { makeProgression, isHidden } from '../games/progression';
import {
  makeAnswer,
  resultToStringProgression,
} from '../games/core';

putWelcome('brain-progression');

const name = getName();

let result = `Congratulations, ${name}`;

for (let i = 0; i < 3; i += 1) {
  const progress = makeProgression();
  console.log(`Question: ${resultToStringProgression(progress)}`);
  const answer = makeAnswer(progress, getAnswer('Your answer: '));

  if (isHidden(answer)) {
    console.log('Correct!');
  } else {
    result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
    break;
  }
}

console.log(result);
