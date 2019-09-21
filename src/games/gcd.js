import { cons, car, cdr } from 'hexlet-pairs';
import { main } from '../index';
import { getRandNumber } from './generator';

const getOrderedNumbers = (pair) => {
  return (car(pair) > cdr(pair)) ? pair : cons(cdr(pair), car(pair));
}

const getGCD = (numbers) => {
  let GCD = 1;
  for (let i = cdr(numbers); i > 0; i -= 1) {
    if (car(numbers) % cdr(numbers) === 0) {
      GCD = cdr(numbers);
    }
  }
  return GCD;
};

const getCorrectAnswer = (rangeOfNumbers) => {
  const calcGCD = () => {
    const first = getRandNumber(rangeOfNumbers);
    const second = getRandNumber(rangeOfNumbers);
    const numbersToString = `${first} ${second}`;
    const currentAnswer = getGCD(getOrderedNumbers(cons(first, second)));
    return cons(numbersToString, currentAnswer);
  };
  return calcGCD;
};

export const startGame = () => {
  const condition = 'Find the greatest common divisor of given numbers.';
  const rangeOfNumbers = 10;
  main(cons(condition, getCorrectAnswer(rangeOfNumbers)));
};

export default startGame;
