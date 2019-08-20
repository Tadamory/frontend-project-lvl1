#!/usr/bin/env node

import { welcome, requiestName, question } from '../games/questions';
import { isGcd } from '../games/gcd';
import {
  make,
  makeAnswer,
  resultToStringGcd,
  numberRand,
} from '../games/core';

welcome('brain-gcd');

const name = requiestName();

let result = `Congratulations, ${name}`;

for (let i = 0; i < 3; i += 1) {
  const numbers = make(numberRand(10), numberRand(10));
  console.log(`Question: ${resultToStringGcd(numbers)}`);
  const answer = makeAnswer(numbers, question('Your answer: '));

  if (isGcd(answer)) {
    console.log('Correct!');
  } else {
    result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
    break;
  }
}

console.log(result);
