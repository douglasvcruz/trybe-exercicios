// pushNumberAsync.js
const pushNumber = (list, number) => list.push(number);

const numbersEX = [];

pushNumber(numbersEX, 1);
pushNumber(numbersEX, 2);
pushNumber(numbersEX, 3);

console.log(numbersEX);

// Saída:
// [ 1, 2, 3 ]+
// pushNumberAsync.js

const numbers0 = [];

const THREE_SECONDS = 3000;

setTimeout(() => pushNumber(numbers0, 1), THREE_SECONDS);
pushNumber(numbers0, 2);
pushNumber(numbers0, 3);

console.log(numbers0);

// Saída:
// [2, 3]

const numbers = [];

setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), THREE_SECONDS);

// setTimeout(1parametro, 2parametro);
// setTimeout(() => {}, 2000);