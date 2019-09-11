import { main, make } from '../index';

const getRandNumber = (limit) => Math.floor(Math.random() * limit);

const question = (limit) => {
  const result = () => {
    const number = getRandNumber(limit);
    const currentAnswer = (number % 2 === 0) ? 'yes' : 'no';
    return make(number, currentAnswer);
  };
  return result;
};

export const startGame = (condition, limit) => {
  main(make(condition, question(limit)));
};

export default startGame;
