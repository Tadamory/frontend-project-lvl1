import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const saveAnswer = (correctAnswer) => (userAnswer) => {
  if (parseInt(userAnswer, 10) || userAnswer === '0') {
    return Number(correctAnswer) === Number(userAnswer);
  }
  return correctAnswer === userAnswer;
};

export const main = (pair) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(car(pair));
  let result = `Congratulations, ${name}`;

  for (let i = 0; i < 3; i += 1) {
    const q = cdr(pair)();

    const conditionToString = car(q);
    const currentAnswer = cdr(q);

    const isCorrect = saveAnswer(currentAnswer);
    console.log(`Question: ${conditionToString}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isCorrect(userAnswer)) {
      console.log('Correct!');
    } else {
      result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'.\nLet's try again, ${name}!`;
      break;
    }
  }

  console.log(result);
};


export default main;
