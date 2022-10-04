// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'uva', 'maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melancia', 'cereja', 'melão'];

const fruitSalad = (fruit, additional) => {
  const fruitSalad = [...fruit, ...additional]
  return fruitSalad
};

console.log(fruitSalad(specialFruit, additionalItens));

const user = {
  name: 'Maria',
  age: 21,
  nationality1: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};


const userInfos = {
  ...user,
  ...jobInfos,
};

const { name, age, nationality1, profession, squad, squadInitials } = userInfos;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality1}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
