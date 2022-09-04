// Bonus 1
const numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function romanos(numero) {
  numero = numero.toLowerCase();
  const tamanho = numero.length;
  let soma = numerosRomanos[numero[tamanho - 1]];
  let atual = numerosRomanos[numero[tamanho - 1]];

  for (let i = 2; i <= tamanho; i += 1) {
    const prox = numerosRomanos[numero[tamanho - i]];

    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }

    atual = prox;
  }

  return soma;
}

console.log(romanos('IVXLCDM'));
console.log(romanos('MDCLXVI'));

// Bonus 2
let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
  const resultado = [];

  for (let i in vector) {
    const numbers = vector[i];

    for (let i2 in numbers) {
      const push = numbers[i2];
      if (push % 2 === 0) {
        resultado.push(push);
      }
    }
  }
  return resultado;
}

console.log(arrayOfNumbers(vector));

// Bonus 3
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const resultado = {};

for (let i in basket) {
  const fruta = basket[i];
  if (!resultado[fruta]) 
  resultado[fruta] = 0;
  resultado[fruta] += 1;
}

const adicional = [];
for (fruta in resultado) {
  let mensagem = `${resultado[fruta]} ${fruta}`;
  if (resultado[fruta] > 1) mensagem += 's';
  adicional.push(mensagem);
}

console.log(`Sua cesta possui: ${adicional.join(', ')}.`);

// Bonus 4
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let moradoresBlocoDois = moradores.blocoDois;
let ultimo = moradoresBlocoDois[moradoresBlocoDois.length - 1];

console.log('O morador do bloco 2 de nome ' + ultimo.nome + ' ' + ultimo.sobrenome +
 ' mora no ' + ultimo.andar + '° andar, apartamento ' + ultimo.apartamento);
