import { main } from '../index';

const isPrime = () => {
  const result = (number) => {
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

    return prime ? 'yes' : 'no';
  };
  return result;
};

export const startGame = (game) => {
  main(isPrime(), game);
};

export default startGame;
