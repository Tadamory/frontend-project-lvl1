import {
  getRandNumber,
  getRandOperation,
  getFirstNumber,
  getNumbers,
  getSecondNumber,
  getOperation,
  requestName,
  requestAnswer,
  make,
  makeOperation,
  resultToStringCalc,
  saveAnswer,
} from '../index';

const isCalc = (pair) => {
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

export const startGame = (game) => {
  const name = requestName(game);

  let result = `Congratulations, ${name}`;

  for (let i = 0; i < 3; i += 1) {
    const operation = makeOperation(make(getRandNumber(10), getRandNumber(10)), getRandOperation());
    console.log(`Question: ${resultToStringCalc(operation)}`);

    const isCorrect = saveAnswer(isCalc(operation));

    const response = requestAnswer('Your answer: ');

    if (isCorrect(Number(response))) {
      console.log('Correct!');
    } else {
      result = `'${response}' is wrong answer ;(. Correct answer was '${isCalc(operation)}'.\nLet's try again, ${name}!`;
      break;
    }
  }

  console.log(result);
};

export default startGame;
