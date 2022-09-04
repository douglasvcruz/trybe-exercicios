// 1º 
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem);

// 2º 
info.recorrente = 'Sim';
// console.log(info)

// 3º 
for (let i in info) {
  console.log(i);
}

// 4º 
for (let i in info) {
  console.log(info[i]);
}

// 5º 
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let i in info2) {
  if (info[i] === 'Sim' && info2[i] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[i] + ' e ' + info2[i])
  }
}

// 6º 
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '".');

// 7º 
leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  },
);

console.log(leitor.livrosFavoritos[1]);

// 8º 
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')

// 9º 
function verificaPalindrome(palavra) {
  for (let i in palavra) {
    if (palavra[i] != palavra[palavra.length - 1 - i]) {
      return false;
    }
    return true;
  }
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

function verificaPalindrome2(palavra) {
  let reverso = palavra.split('').reverse().join('');
  if (reverso === palavra) {
    return true;
  }
  return false;
}

console.log(verificaPalindrome2('arara'));
console.log(verificaPalindrome2('desenvolvimento'));

// 10º 
function test(array) {
  let maior = 0;
  for (let i in array) {
    if (array[maior] < array[i]) {
      maior = i;
    }
  }
  return maior;
}
console.log(test([2, 3, 6, 7, 10, 1]));

// 11º 
function test2(array) {
  let menor = 0;
  for (let i in array) {
    if (array[menor] > array[i]) {
      menor = i;
    }
  }
  return menor;
}
console.log(test2([2, 4, 6, 7, 10, 0, -3]));

// 12º 
function caracteres(array) {
  let nome = array[0]
  for (let i in array) {
    if (nome.length < array[i].length) {
      nome = array[i];
    }
  }
  return nome;
}
console.log(caracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 13º
function maisRepetido(numeros) {
  let repetido = 0;
  let count = 0;
  let valor = 0;

  for (let i in numeros) {
    let verifica = numeros[i];
    for (let i2 in numeros) {
      if (verifica === numeros[i2]) {
        count += 1;
      }
    }
    if (count > repetido) {
      repetido = count;
      valor = i;
    }
    count = 0;
  }

  return numeros[valor];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
