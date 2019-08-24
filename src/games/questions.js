import readlineSync from 'readline-sync';

export const welcome = (message) => {
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
    default:
      break;
  }
};

export const requiestName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const question = (message) => readlineSync.question(message);
