import {
  make,
  getFirstNumber,
  getSecondNumber,
  requestName,
  requestAnswer,
  getRandNumber,
  resultToStringGcd,
  saveAnswer,
} from '../index';

const isGcd = (pair) => {
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
  return isGcd(make(num2, mod));
};

export const startGame = (game) => {
  const name = requestName(game);

  let result = `Congratulations, ${name}`;

  for (let i = 0; i < 3; i += 1) {
    const numbers = make(getRandNumber(10), getRandNumber(10));
    console.log(`Question: ${resultToStringGcd(numbers)}`);

    const isCorrect = saveAnswer(isGcd(numbers));

    const response = requestAnswer('Your answer: ');

    if (isCorrect(Number(response))) {
      console.log('Correct!');
    } else {
      result = `'${response}' is wrong answer ;(. Correct answer was '${isGcd(numbers)}'.\nLet's try again, ${name}!`;
      break;
    }
  }

  console.log(result);
};

export default startGame;
