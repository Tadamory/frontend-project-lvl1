import { cons } from 'hexlet-pairs';
import { main } from '../index';
import { getRandNumber } from './generator';

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
}

const getCorrectAnswer = (rangeOfNumners) => {
  const calcPrime = () => {
    const number = getRandNumber(rangeOfNumners);
    const currentAnswer = isPrime(number) ? 'yes' : 'no';

    return cons(number, currentAnswer);
  };
  return calcPrime;
};

export const startGame = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rangeOfNumners = 10;
  main(cons(condition, getCorrectAnswer(rangeOfNumners)));
};

export default startGame;
