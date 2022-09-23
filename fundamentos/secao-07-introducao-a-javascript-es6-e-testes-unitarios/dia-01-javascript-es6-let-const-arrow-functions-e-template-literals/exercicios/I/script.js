const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (numbers) => {
  for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (numbers[i] < numbers[j]) {
        let position = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = position
      }
    }
  }
  return numbers
  // return `Os números ${numbers} se encontram ordenados de forma crescente!` Modo alternativo
};

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

oddsAndEvens.sort((a, b) => a - b);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);
