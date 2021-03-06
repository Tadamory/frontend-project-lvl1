import { cons } from 'hexlet-pairs';
import { playGame } from '../index';
import getRandNumber from '../generator';

const startRange = 1;
const endRange = 10;
const endStepRange = 5;
const sizeProgression = 10;
const gameCondition = 'What number is missing in the progression?';

const makeProgression = (start, step, size) => {
  const progression = [];
  for (let i = 0; i < size - 1; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getRoundData = () => {
  const start = getRandNumber(startRange, endRange);
  const step = getRandNumber(startRange, endStepRange);
  const progression = makeProgression(start, step, sizeProgression);
  const hiddenElementIndex = getRandNumber(startRange, progression.length - 1);
  const correctAnswer = progression[hiddenElementIndex];

  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    question = (i === hiddenElementIndex) ? `${question}..` : `${question}${progression[i]}`;
    question = (i !== progression.length) ? `${question} ` : question;
  }

  return cons(question, String(correctAnswer));
};

export default () => playGame(gameCondition, getRoundData);
