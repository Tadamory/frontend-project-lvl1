import { cons } from 'hexlet-pairs';
import { main } from '../engine/core';
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

const getCorrectAnswer = () => () => {
  const startRange = 1;
  const endRange = 20;
  const number = getRandNumber(startRange, endRange);
  const currentAnswer = isPrime(number) ? 'yes' : 'no';

  return cons(number, currentAnswer);
};

export const startGame = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  main(condition, getCorrectAnswer());
};

export default startGame;
