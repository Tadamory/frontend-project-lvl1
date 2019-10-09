import { cons } from 'hexlet-pairs';
import { startGame } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const startRange = 1;
const endRange = 20;
const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number % 2 === 0) {
    return false;
  }
  const q = Math.round(Math.sqrt(number));
  for (let i = 3; i < q + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRoundCondition = () => () => {
  const question = getRandNumber(startRange, endRange);
  const currectAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, currectAnswer);
};

export default () => startGame(gameCondition, getRoundCondition());
