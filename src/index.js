import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const roundsCount = 3;

export const playGame = (gameCondition, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(gameCondition);

  for (let i = 0; i < roundsCount; i += 1) {
    const roundCondition = getRoundData();
    const roundQuestion = car(roundCondition);
    const roundCorrectAnswer = cdr(roundCondition);

    console.log(`Question: ${roundQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === roundCorrectAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${roundCorrectAnswer}'.\nLet's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}`);
};

export default playGame;
