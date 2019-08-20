import {
  cons,
  first,
  second,
  numberRand,
} from './core';

export const make = (number, answer) => cons(number, answer);

export const number = (pair) => first(pair);

export const answer = (pair) => second(pair);

export const rand = (limit) => numberRand(limit);

export const isEven = (pair) => {
  if ((number(pair) % 2 === 0 && answer(pair) === 'yes') || (number(pair) % 2 !== 0 && answer(pair) === 'no')) {
    return true;
  }
  return false;
};
