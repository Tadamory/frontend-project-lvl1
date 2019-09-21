import { cons } from 'hexlet-pairs';
import { main } from '../index';
import { getRandNumber } from './generator';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (rangeOfNumbers) => {
  const calcEven = () => {
    const number = getRandNumber(rangeOfNumbers);
    const currentAnswer = isEven(number) ? 'yes' : 'no';
    return cons(number, currentAnswer);
  };
  return calcEven;
};

export const startGame = () => {
  const condition = 'Answer "yes" if number even otherwise answer "no".';
  const rangeOfNumbers = 10;
  main(cons(condition, getCorrectAnswer(rangeOfNumbers)));
};

export default startGame;
