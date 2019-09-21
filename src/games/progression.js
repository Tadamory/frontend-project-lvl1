import { cons } from 'hexlet-pairs';
import { main } from '../index';
import { getRandNumber } from './generator';

const makeProgression = (firstPoint, step, length) => {
  const progression = [];
  progression.push(firstPoint);
  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const getCorrectAnswer = (progressionFirstPointRange, progressionlength, progressionStepRange) => {
  const result = () => {
    const progression = makeProgression(getRandNumber(progressionFirstPointRange), getRandNumber(progressionStepRange), progressionlength);
    const hidden = getRandNumber(progression.length - 1);
    const currentAnswer = progression[hidden];
    
    let conditionToString = '';
    for (let i = 0; i < progression.length; i += 1) {
      if (i === hidden) {
        conditionToString += '..';  
      } else {
        conditionToString += progression[i];
      }
      conditionToString += ' ';
    }

    return cons(conditionToString, currentAnswer);
  };
  return result;
};

export const startGame = () => {
  const condition = 'What number is missing in the progression?';
  const progressionFirstPointRange = 10;
  const progressionlength = 10;
  const progressionStepRange = 5;

  main(cons(condition, getCorrectAnswer(progressionFirstPointRange, progressionlength, progressionStepRange)));
};

export default startGame;
