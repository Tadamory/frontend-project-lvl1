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
