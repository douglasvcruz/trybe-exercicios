const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, i) => {
  console.log('Cada elemento do array:', element, i);
});

const meuArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

meuArray.forEach((elemento, i) => {
  if (elemento % 2 === 0) {
    console.log(`${i}: ${elemento} é divisível por 2!`);
  }
});

const arrayOfValue = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValue.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});
