import {
  getHiddenNumber,
  resultToStringProgression,
  requestName,
  requestAnswer,
  makeProgression,
  saveAnswer,
} from '../index';

export const startGame = (game) => {
  const name = requestName(game);

  let result = `Congratulations, ${name}`;

  for (let i = 0; i < 3; i += 1) {
    const progress = makeProgression();
    console.log(`Question: ${resultToStringProgression(progress)}`);

    const isCorrect = saveAnswer(Number(getHiddenNumber(progress)));

    const response = requestAnswer('Your answer: ');

    if (isCorrect(Number(response))) {
      console.log('Correct!');
    } else {
      result = `'${response}' is wrong answer ;(. Correct answer was '${getHiddenNumber(progress)}'.\nLet's try again, ${name}!`;
      break;
    }
  }

  console.log(result);
};

export default startGame;
