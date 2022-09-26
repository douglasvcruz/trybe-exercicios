const hydrate = (numeros) => {
  let quantidade = numeros.match(/\d+/g);
  let soma = 0;

  quantidade.forEach((quantia) => {
    soma += parseInt(quantia, 10);
  });

  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

module.exports = hydrate;