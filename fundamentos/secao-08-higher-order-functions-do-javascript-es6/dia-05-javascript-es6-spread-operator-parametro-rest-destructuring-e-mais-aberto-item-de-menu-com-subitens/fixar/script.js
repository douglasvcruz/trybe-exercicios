// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'uva', 'maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melancia', 'cereja', 'melão'];

const fruitSalad = (fruit, additional) => {
  const fruitSalad = [...fruit, ...additional]
  return fruitSalad
};

console.log(fruitSalad(specialFruit, additionalItens));