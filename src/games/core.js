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

export const numberRand = (limit) => Math.floor(Math.random() * limit);

export const make = (number1, number2) => cons(number1, number2);
export const makeOperation = (pair, operation) => cons(pair, operation);
export const makeAnswer = (pair, answer) => cons(pair, answer);

export const number1 = (pair) => first(pair);
export const number2 = (pair) => second(pair);

export const numbers = (pair) => first(pair);
export const operation = (pair) => second(pair);

export const numbersAndOperation = (pair) => first(pair);
export const answer = (pair) => second(pair);

export const resultToStringCalc = (pair) => `${number1(numbers(pair))} ${operation(pair)} ${number2(numbers(pair))}`;
export const resultToStringGcd = (pair) => `${number1(pair)} ${number2(pair)}`;
