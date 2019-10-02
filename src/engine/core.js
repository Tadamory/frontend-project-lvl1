import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const isCorrectAnswer = (userAnswer, correctAnswer) => {
  if (parseInt(userAnswer, 10) || userAnswer === '0') {
    return Number(correctAnswer) === Number(userAnswer);
  }
  return correctAnswer === userAnswer;
};

export const startGame = (gameCondition, getRoundCondition) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(gameCondition);
  let result = `Congratulations, ${nameUser}`;

  for (let i = 0; i < 3; i += 1) {
    const roundCondition = getRoundCondition();
    const roundQuestion = car(roundCondition);
    const roundCorrectAnswer = cdr(roundCondition);

    console.log(`Question: ${roundQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isCorrectAnswer(userAnswer, roundCorrectAnswer)) {
      console.log('Correct!');
    } else {
      result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${roundCorrectAnswer}'.\nLet's try again, ${nameUser}!`;
      break;
    }
  }

  console.log(result);
};


export default startGame;
