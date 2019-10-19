import { cons } from 'hexlet-pairs';
import { startGame } from '../index';
import getRandNumber from '../generator';

const startRange = 1;
const endRange = 20;
const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number % 2 === 0) {
    return false;
  }
  const squareRoot = Math.round(Math.sqrt(number));
  for (let i = 3; i < squareRoot + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRoundCondition = () => () => {
  const question = getRandNumber(startRange, endRange);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, String(correctAnswer));
};

export default () => startGame(gameCondition, getRoundCondition());
