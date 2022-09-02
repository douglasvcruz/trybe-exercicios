// 1º Exercício
let fatorial = 1;

for (let i = 1; i <= 10; i += 1) {
  fatorial = fatorial * i;
}

console.log(fatorial);

// 2º Exercício
let word = 'tryber';
let reverse = ""

for (let i = 0; i < word.length; i += 1) {
  reverse += word[word.length - 1 - i]; // Solução alternativa: reverse = word.split('').reverse().join('');
}

console.log(reverse);

// 3º Exercício
let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = array[0];
let menor = array[0];

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > maior.length) {
    maior = array[i];
  }
}

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < menor.length) {
    menor = array[i];
  }
}

console.log(maior);
console.log(menor);

// 4º Exercício

let maiorNum = 0;

for (let number = 2; number <= 50; number += 1) {
  let isPrime = true;
  for (let number2 = 2; number2 < number; number2 += 1) {
    if (number % number2 === 0) {
      isPrime = false;
    }
  }
  if (isPrime === true) {
    maiorNum = number;
  }
}

console.log(maiorNum);
