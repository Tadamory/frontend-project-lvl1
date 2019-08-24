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

export const firstNumber = (pair) => first(pair);
export const secondNumber = (pair) => second(pair);

export const numbers = (pair) => first(pair);
export const operation = (pair) => second(pair);

export const numbersAndOperation = (pair) => first(pair);
export const answer = (pair) => second(pair);

export const hiddenNumber = (pair) => second(first(pair));

export const resultToStringCalc = (pair) => `${firstNumber(numbers(pair))} ${operation(pair)} ${secondNumber(numbers(pair))}`;
export const resultToStringGcd = (pair) => `${firstNumber(pair)} ${secondNumber(pair)}`;
export const resultToStringProgression = (pair) => {
  let result = '';
  const progression = first(pair);

  for (let i = 0; i < 10; i += 1) {
    result += progression[i];
    result += ' ';
  }
  return result;
};
