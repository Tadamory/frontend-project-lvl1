import { cons } from 'hexlet-pairs';
import { main } from '../index';

const getRandNumber = (limit) => Math.floor(Math.random() * limit);

const question = (limit) => {
  const result = () => {
    const number = getRandNumber(limit);
    const currentAnswer = (number % 2 === 0) ? 'yes' : 'no';
    return cons(number, currentAnswer);
  };
  return result;
};

export const startGame = () => {
  const condition = 'Answer "yes" if number even otherwise answer "no".';
  const limit = 10;
  main(cons(condition, question(limit)));
};

export default startGame;
