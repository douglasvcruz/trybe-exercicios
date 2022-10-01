const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

const grades = {
  português: 'Aprovado',
  matemática: 'Reprovado',
  inglês: 'Aprovado',
};

const verifyGrades = (studentGrades) => Object.values(studentGrades).every((grade) => grade === 'Aprovado');

console.log(verifyGrades(grades));