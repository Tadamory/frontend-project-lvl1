import { main, make } from '../index';

const getRandNumber = (limit) => Math.floor(Math.random() * limit) + 1;

const question = (limit) => {
  const result = () => {
    let prime = true;
    const number = getRandNumber(limit);

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

    const currentAnswer = prime ? 'yes' : 'no';

    return make(number, currentAnswer);
  };
  return result;
};

export const startGame = (condition, limit) => {
  main(make(condition, question(limit)));
};

export default startGame;
