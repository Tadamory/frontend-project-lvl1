import {
  getFirstNumber,
  getNumbers,
  getSecondNumber,
  getOperation,
  main,
} from '../index';

const isCalc = () => {
  const result = (pair) => {
    const num1 = getFirstNumber(getNumbers(pair));
    const num2 = getSecondNumber(getNumbers(pair));
    const oper = getOperation(pair);

    switch (oper) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return '';
    }
  };
  return result;
};

export const startGame = (game) => {
  main(isCalc(), game);
};

export default startGame;
