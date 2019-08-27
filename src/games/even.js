import { main } from '../index';

const isEven = () => {
  const result = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  return result;
};

export const startGame = (game) => {
  main(isEven(), game);
};

export default startGame;
