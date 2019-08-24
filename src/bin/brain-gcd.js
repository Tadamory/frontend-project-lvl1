#!/usr/bin/env node

import { putWelcome, getName, getAnswer } from '../games/questions';
import { isGcd } from '../games/gcd';
import {
  make,
  makeAnswer,
  resultToStringGcd,
  getRandNumber,
} from '../games/core';

putWelcome('brain-gcd');

const name = getName();

let result = `Congratulations, ${name}`;

for (let i = 0; i < 3; i += 1) {
  const numbers = make(getRandNumber(10), getRandNumber(10));
  console.log(`Question: ${resultToStringGcd(numbers)}`);
  const answer = makeAnswer(numbers, getAnswer('Your answer: '));

  if (isGcd(answer)) {
    console.log('Correct!');
  } else {
    result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
    break;
  }
}

console.log(result);
