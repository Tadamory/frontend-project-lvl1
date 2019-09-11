import { cons, car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const saveAnswer = (correctAnswer) => (userAnswer) => {
  if (parseInt(userAnswer, 10)) {
    return Number(correctAnswer) === Number(userAnswer);
  }
  return correctAnswer === userAnswer;
};

const getAnswer = (message) => readlineSync.question(message);

const getName = (question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);
  return name;
};

export const make = () => cons(car, cdr);

export const main = (pair) => {
  const condition = car(pair);
  const name = getName(condition);
  let result = `Congratulations, ${name}`;

  for (let i = 0; i < 3; i += 1) {
    const q = cdr(pair)();

    const conditionToString = car(q);
    const currentAnswer = cdr(q);

    const isCorrect = saveAnswer(currentAnswer);
    console.log(`Question: ${conditionToString}`);
    const userAnswer = getAnswer('Your answer: ');

    if (isCorrect(userAnswer)) {
      console.log('Correct!');
    } else {
      result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'.\nLet's try again, ${name}!`;
      break;
    }
  }

  console.log(result);
};
