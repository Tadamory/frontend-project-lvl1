import { cons } from 'hexlet-pairs';
import { startGame } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const isPrime = (number) => {
  let prime = true;
  if (number <= 2) {
    prime = true;
  } else if (number % 2 === 0) {
    prime = false;
  } else {
    const q = Math.round(Math.sqrt(number));
    for (let i = 3; i < q + 1; i += 1) {
      if (number % i === 0) {
        prime = false;
        break;
      }
    }
  }
  return prime;
};

const getRoundCondition = () => () => {
  const startRange = 1;
  const endRange = 20;
  const condition = getRandNumber(startRange, endRange);
  const currectAnswer = isPrime(condition) ? 'yes' : 'no';

  return cons(condition, currectAnswer);
};

export const preparationGame = () => {
  const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(gameCondition, getRoundCondition());
};

export default preparationGame;
