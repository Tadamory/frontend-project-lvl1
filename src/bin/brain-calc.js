#!/usr/bin/env node

import { welcome, requiestName, question } from '../games/questions';
import { isCalc, operationRand } from '../games/calc';
import {
  make,
  makeAnswer,
  makeOperation,
  resultToStringCalc,
  numberRand,
} from '../games/core';

welcome('brain-even');

const name = requiestName();

let result = `Congratulations, ${name}`;

for (let i = 0; i < 3; i += 1) {
  const numbers = make(numberRand(10), numberRand(10));
  const operation = makeOperation(numbers, operationRand());
  console.log(`Question: ${resultToStringCalc(operation)}`);
  const answer = makeAnswer(operation, question('Your answer: '));

  if (isCalc(answer)) {
    console.log('Correct!');
  } else {
    result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
    break;
  }
}

console.log(result);
