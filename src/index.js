import readlineSync from 'readline-sync';

export const question = () => readlineSync.question('May I have your name? ');

export default question;
