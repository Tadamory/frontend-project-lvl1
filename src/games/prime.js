import {
  requestName,
  requestAnswer,
  getRandNumber,
  saveAnswer,
} from '../index';

const isPrime = (number) => {
  let result = true;

  if (number <= 2) {
    result = true;
  } else if (number % 2 === 0) {
    result = false;
  } else {
    const q = Math.round(Math.sqrt(number));
    for (let i = 3; i < q + 1; i += 1) {
      if (number % i === 0) {
        result = false;
        break;
      }
    }
  }

  return result ? 'yes' : 'no';
};

export const startGame = (game) => {
  const name = requestName(game);

  let result = `Congratulations, ${name}`;

  for (let i = 0; i < 3; i += 1) {
    const number = getRandNumber(100) + 1;
    console.log(`Question: ${number}`);

    const isCorrect = saveAnswer(isPrime(number));

    const response = requestAnswer('Your answer: ');

    if (isCorrect(response)) {
      console.log('Correct!');
    } else {
      result = `'${response}' is wrong answer ;(. Correct answer was '${isPrime(number)}'.\nLet's try again, ${name}!`;
      break;
    }
  }

  console.log(result);
};

export default startGame;
