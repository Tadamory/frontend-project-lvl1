#!/usr/bin/env node

import question from '../index';

console.log('Welcome to the Brain Games!');

const name = question();

console.log(`Hello, ${name}!`);
