import {
  getRandNumber,
  requestName,
  requestAnswer,
  saveAnswer,
} from '../index';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const startGame = (game) => {
  const name = requestName(game);

  let result = `Congratulations, ${name}`;

  for (let i = 0; i < 3; i += 1) {
    const number = getRandNumber(10);

    const isCorrect = saveAnswer(isEven(number));

    console.log(`Question: ${number}`);

    const response = requestAnswer('Your answer: ');

    if (isCorrect(response)) {
      console.log('Correct!');
    } else {
      result = `'${response}' is wrong answer ;(. Correct answer was '${isEven(number)}'.\nLet's try again, ${name}!`;
      break;
    }
  }

  console.log(result);
};

export default startGame;
