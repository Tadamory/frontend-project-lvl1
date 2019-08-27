import {
  make,
  getFirstNumber,
  getSecondNumber,
  main,
} from '../index';

const isGcd = () => {
  const result = (pair) => {
    const firstNum = getFirstNumber(pair);
    const secondNum = getSecondNumber(pair);

    const num1 = (firstNum > secondNum) ? firstNum : secondNum;
    const num2 = (firstNum > secondNum) ? secondNum : firstNum;
    const mod = num1 % num2;

    if (num1 === 0 || num2 === 0) {
      return 0;
    }

    if (mod === 0) {
      return num2;
    }
    return result(make(num2, mod));
  };
  return result;
};

export const startGame = (game) => {
  main(isGcd(), game);
};

export default startGame;
