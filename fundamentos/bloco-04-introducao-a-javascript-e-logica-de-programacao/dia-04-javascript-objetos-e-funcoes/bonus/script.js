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
