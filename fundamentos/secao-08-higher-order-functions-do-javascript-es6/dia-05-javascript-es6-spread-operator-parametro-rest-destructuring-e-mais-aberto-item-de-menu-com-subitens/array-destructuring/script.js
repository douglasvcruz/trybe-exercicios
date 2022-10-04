const arrayCountries0 = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry0 = arrayCountries0[0];
const secondCountry0 = arrayCountries0[1];
const thirdCountry0 = arrayCountries0[2];
const fourthCountry0 = arrayCountries0[3];

console.log(firstCountry0);
console.log(secondCountry0);
console.log(thirdCountry0);
console.log(fourthCountry0);

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [ firstCountry, secondCountry, thirdCountry, fourthCountry ] = arrayCountries;

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
console.log(fourthCountry);

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]);

const [ first, second ] = saudacoes;

console.log(first);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida);

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares);

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares);
