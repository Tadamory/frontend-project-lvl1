import { cons } from 'hexlet-pairs';
import { main } from '../engine/core';
import { getRandNumber } from '../engine/generator';

const getRandOperator = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandNumber(operations.length - 1)];
};

const getCorrectAnswer = (rangeOfNumbers) => {
  const calcExpression = () => {
    const first = getRandNumber(rangeOfNumbers);
    const second = getRandNumber(rangeOfNumbers);
    const operator = getRandOperator();
    const expressionToString = `${first} ${operator} ${second}`;

    let expressionResult = null;
    switch (operator) {
      case '+':
        expressionResult = first + second;
        break;
      case '-':
        expressionResult = first - second;
        break;
      case '*':
        expressionResult = first * second;
        break;
      default:
        expressionResult = null;
        break;
    }

    return cons(expressionToString, expressionResult);
  };
  return calcExpression;
};

export const startGame = () => {
  const condition = 'What is the result of the expression?';
  const rangeOfNumbers = 10;
  main(cons(condition, getCorrectAnswer(rangeOfNumbers)));
};

export default startGame;
