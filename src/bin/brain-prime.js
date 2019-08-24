#!/usr/bin/env node

import { putWelcome, getName, getAnswer } from '../games/questions';
import { make, getRandNumber } from '../games/core';
import { isPrime } from '../games/prime';

putWelcome('brain-prime');

const name = getName();

let result = `Congratulations, ${name}`;

for (let i = 0; i < 3; i += 1) {
  const number = getRandNumber(100) + 1;
  console.log(`Question: ${number}`);
  const answer = make(number, getAnswer('Your answer: '));

  if (isPrime(answer)) {
    console.log('Correct!');
  } else {
    result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
    break;
  }
}

console.log(result);
