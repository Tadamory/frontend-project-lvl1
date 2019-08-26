import { cons, car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export const getRandNumber = (limit) => Math.floor(Math.random() * limit);
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

export const getHiddenNumber = (pair) => cdr(pair);

export const resultToStringCalc = (pair) => `${getFirstNumber(getNumbers(pair))} ${getOperation(pair)} ${getSecondNumber(getNumbers(pair))}`;
export const resultToStringGcd = (pair) => `${getFirstNumber(pair)} ${getSecondNumber(pair)}`;
export const resultToStringProgression = (pair) => {
  let result = '';
  const progression = car(pair);

  for (let i = 0; i < 10; i += 1) {
    result += progression[i];
    result += ' ';
  }
  return result;
};

export const saveAnswer = (correctAnswer) => (userAnswer) => correctAnswer === userAnswer;

export const requestName = (message) => {
  console.log('Welcome to the Brain Games!');
  switch (message) {
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
