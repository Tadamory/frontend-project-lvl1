import {
  getSecondNumber,
  main,
} from '../index';

const isHidden = () => (pair) => getSecondNumber(pair);

export const startGame = (game) => {
  main(isHidden(), game);
};

export default startGame;
