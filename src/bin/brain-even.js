#!/usr/bin/env node

import { putWelcome, getName, getAnswer } from '../games/questions';
import { make, getRandNumber } from '../games/core';
import { isEven } from '../games/even';

putWelcome('brain-even');

const name = getName();

let result = `Congratulations, ${name}`;

for (let i = 0; i < 3; i += 1) {
  const number = getRandNumber(10);
  console.log(`Question: ${number}`);
  const answer = make(number, getAnswer('Your answer: '));

  if (isEven(answer)) {
    console.log('Correct!');
  } else {
    result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
    break;
  }
}

console.log(result);
