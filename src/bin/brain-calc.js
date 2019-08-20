#!/usr/bin/env node

import { welcome, requiestName, question } from '../games/questions';
import {
  make,
  makeOperation,
  makeAnswer,
  isCalc,
  rand,
  operationRand,
  resultToString,
} from '../games/calc';

welcome('brain-even');

const name = requiestName();

let result = `Congratulations, ${name}`;

for (let i = 0; i < 3; i += 1) {
  const numbers = make(rand(10), rand(10));
  const operation = makeOperation(numbers, operationRand());
  console.log(`Question: ${resultToString(operation)}`);
  const answer = makeAnswer(operation, question('Your answer: '));

  if (isCalc(answer)) {
    console.log('Correct!');
  } else {
    result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
    break;
  }
}

console.log(result);
