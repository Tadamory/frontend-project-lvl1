export const cons = (a, b) => (message) => {
  switch (message) {
    case 'first':
      return a;
    case 'second':
      return b;
    default:
      return null;
  }
};

export const first = (pair) => pair('first');
export const second = (pair) => pair('second');

export const getRandNumber = (limit) => Math.floor(Math.random() * limit);

export const make = (number1, number2) => cons(number1, number2);
export const makeOperation = (pair, operation) => cons(pair, operation);
export const makeAnswer = (pair, answer) => cons(pair, answer);

export const getFirstNumber = (pair) => first(pair);
export const getSecondNumber = (pair) => second(pair);

export const getNumbers = (pair) => first(pair);
export const getOperation = (pair) => second(pair);

export const getNumbersAndOperation = (pair) => first(pair);
export const getAnswer = (pair) => second(pair);

export const getHiddenNumber = (pair) => second(first(pair));

export const resultToStringCalc = (pair) => `${getFirstNumber(getNumbers(pair))} ${getOperation(pair)} ${getSecondNumber(getNumbers(pair))}`;
export const resultToStringGcd = (pair) => `${getFirstNumber(pair)} ${getSecondNumber(pair)}`;
export const resultToStringProgression = (pair) => {
  let result = '';
  const progression = first(pair);

  for (let i = 0; i < 10; i += 1) {
    result += progression[i];
    result += ' ';
  }
  return result;
};
