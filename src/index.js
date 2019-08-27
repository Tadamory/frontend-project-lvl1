import { cons, car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export const getRandNumber = (limit) => Math.floor(Math.random() * limit) + 1;
export const getRandOperation = () => {
  const oper = getRandNumber(3);
  switch (oper) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return '';
  }
};

export const make = (number1, number2) => cons(number1, number2);
export const makeOperation = (pair, operation) => cons(pair, operation);

export const makeProgression = () => {
  const start = getRandNumber(10);
  const step = getRandNumber(5);
  const hiddenIndex = getRandNumber(10);
  const progress = [];
  let iter = start;
  let hiddenNum = 0;

  progress.push(iter);

  for (let i = 1; i < 10; i += 1) {
    iter += step;
    if (i === hiddenIndex) {
      progress.push('..');
      hiddenNum += iter;
    } else {
      progress.push(iter);
    }
  }

  return make(progress, hiddenNum);
};

export const getFirstNumber = (pair) => car(pair);
export const getSecondNumber = (pair) => cdr(pair);

export const getNumbers = (pair) => car(pair);
export const getOperation = (pair) => cdr(pair);

export const questionToString = (pair) => {
  switch (cdr(pair)) {
    case 'brain-games':
      return '';
    case 'brain-even':
      return `${car(pair)}`;
    case 'brain-calc':
      return `${getFirstNumber(getNumbers(car(pair)))} ${getOperation(car(pair))} ${getSecondNumber(getNumbers(car(pair)))}`;
    case 'brain-gcd':
      return `${getFirstNumber(car(pair))} ${getSecondNumber(car(pair))}`;
    case 'brain-progression': {
      let result = '';
      const progression = car(car(pair));
      for (let i = 0; i < 10; i += 1) {
        result += progression[i];
        result += ' ';
      }
      return result;
    }
    case 'brain-prime':
      return `${car(pair)}`;
    default:
      return '';
  }
};

export const saveAnswer = (correctAnswer) => (userAnswer) => {
  if (parseInt(userAnswer, 10)) {
    return Number(correctAnswer) === Number(userAnswer);
  }
  return correctAnswer === userAnswer;
};

export const requestName = (game) => {
  console.log('Welcome to the Brain Games!');
  switch (game) {
    case 'brain-games':
      break;
    case 'brain-even':
      console.log('Answer "yes" if number even otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'brain-progression':
      console.log('What number is missing in the progression?');
      break;
    case 'brain-prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      break;
  }

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const requestAnswer = (message) => readlineSync.question(message);

export const main = (correctResult, game) => {
  const name = requestName(game);

  let result = `Congratulations, ${name}`;

  for (let i = 0; i < 3; i += 1) {
    let condition = null;

    switch (game) {
      case 'brain-games':
        break;
      case 'brain-even':
        condition = getRandNumber(10);
        break;
      case 'brain-calc':
        condition = makeOperation(make(getRandNumber(10), getRandNumber(10)), getRandOperation());
        break;
      case 'brain-gcd':
        condition = make(getRandNumber(10), getRandNumber(10));
        break;
      case 'brain-progression':
        condition = makeProgression();
        break;
      case 'brain-prime':
        condition = getRandNumber(100);
        break;
      default:
        break;
    }

    const isCorrect = saveAnswer(correctResult(condition));

    console.log(`Question: ${questionToString(cons(condition, game))}`);

    const response = requestAnswer('Your answer: ');

    if (isCorrect(response)) {
      console.log('Correct!');
    } else {
      result = `'${response}' is wrong answer ;(. Correct answer was '${correctResult(condition)}'.\nLet's try again, ${name}!`;
      break;
    }
  }

  console.log(result);
};
