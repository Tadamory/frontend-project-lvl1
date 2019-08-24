#!/usr/bin/env node

import { putWelcome, getName, getAnswer } from '../games/questions';
import { isCalc, getRandOperation } from '../games/calc';
import {
  make,
  makeAnswer,
  makeOperation,
  resultToStringCalc,
  getRandNumber,
} from '../games/core';

putWelcome('brain-even');

const name = getName();

let result = `Congratulations, ${name}`;

for (let i = 0; i < 3; i += 1) {
  const numbers = make(getRandNumber(10), getRandNumber(10));
  const operation = makeOperation(numbers, getRandOperation());
  console.log(`Question: ${resultToStringCalc(operation)}`);
  const answer = makeAnswer(operation, getAnswer('Your answer: '));

  if (isCalc(answer)) {
    console.log('Correct!');
  } else {
    result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
    break;
  }
}

console.log(result);
