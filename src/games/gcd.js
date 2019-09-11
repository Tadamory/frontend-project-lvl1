import { make, main } from '../index';

const getRandNumber = (limit) => Math.floor(Math.random() * limit) + 1;

const question = (limit) => {
  const result = () => {
    const firstNum = getRandNumber(limit);
    const secondNum = getRandNumber(limit);
    const conditionToString = `${firstNum} ${secondNum}`;
    let currentAnswer = 1;

    const num1 = (firstNum > secondNum) ? firstNum : secondNum;
    const num2 = (firstNum > secondNum) ? secondNum : firstNum;

    if (num1 === 1 || num2 === 1) {
      currentAnswer = 1;
    }

    for (let i = num2; i > 0; i -= 1) {
      if (num1 % num2 === 0) {
        currentAnswer = num2;
      }
    }

    return make(conditionToString, currentAnswer);
  };
  return result;
};

export const startGame = (condition, limit) => {
  main(make(condition, question(limit)));
};

export default startGame;
