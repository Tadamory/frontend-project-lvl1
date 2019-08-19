import readlineSync from 'readline-sync';

export const greeting = (task) => {
  console.log('Welcome to the Brain Games!');
  if (task === 'brain-even') {
    console.log('Answer "yes" if number even otherwise answer "no".');
  }
};

export const questionName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const randInteger = (min, max) => Math.trunc(Math.random() * (max - min) + min);

export const questionNumbers = (name) => {
  let result = `Congratulations, ${name}`;

  for (let i = 0; i < 3; i += 1) {
    const nomber = randInteger(1, 100);
    console.log(`Question: ${nomber}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && nomber % 2 === 0) || (answer === 'no' && nomber % 2 !== 0)) {
      console.log('Correct!');
    } else {
      result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
      break;
    }
  }
  console.log(result);
};
