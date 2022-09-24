const fatorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i
  }
  return result
}

console.log(`Esse é o fatorial ${fatorial(6)}`);

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

const longestWord = (frase) => {
  const wordArray = frase.split(' ');
  let max = 0;
  let result = '';

  for (const word of wordArray) {
    if (word.length > max) {
      max = word.length;
      result = word;
    }
  }
  return result;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

const longestWord2 = text => text.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(longestWord2("Antonio foi ao banheiro e não sabemos o que aconteceu"));

const button = document.getElementById('click');
const contador = document.getElementById('count');
let contagem = 0;

button.addEventListener('click', () => contador.innerHTML = contagem += 1);

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!'
  const x = frase.split(' ')
  for (let i = 0; i < x.length; i += 1) {
    if (x[i] === 'x') {
      x[i] = nome; 
    }
  }

  return x.join(' ');
}
console.log(substituaX('Douglas'));

const minhasSkills = (test) => {
  const skills = ['Dom', 'CSS', 'HTML'];
  let resultado = `${test}

  Minhas três principais habilidades são:
  `;

  for (let i = 0; i < skills.length; i += 1) {
    resultado = `${resultado}
    - ${skills[i]}`
  }
return resultado;
};

console.log(minhasSkills(substituaX('Douglas')));
