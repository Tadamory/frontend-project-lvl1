#!/usr/bin/env node

import { welcome, requiestName, question } from '../games/questions';
import { make, numberRand } from '../games/core';
import { isPrime } from '../games/prime';

welcome('brain-prime');

const name = requiestName();

let result = `Congratulations, ${name}`;

for (let i = 0; i < 3; i += 1) {
  const number = numberRand(100) + 1;
  console.log(`Question: ${number}`);
  const answer = make(number, question('Your answer: '));

  if (isPrime(answer)) {
    console.log('Correct!');
  } else {
    result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
    break;
  }
}

console.log(result);
