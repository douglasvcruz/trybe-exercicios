// Crie uma função que retorne a string 'Acordando!!';
const acordando = () => 'Acordando!!';
// Crie outra função que retorne a string 'Bora tomar café!!';
const cafe = () => 'Bora tomar café!!';
// Crie mais uma função que retorne a string 'Partiu dormir!!';
const dormir = () => 'Partiu dormir!!';
// Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
const doingThings = (func) => {
  const result = func();
  console.log(result);
};

doingThings(acordando);
doingThings(cafe);
doingThings(dormir);