const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const emailGenerator = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return { nomeCompleto, email: `${email}@trybe.com` };
}

console.log(newEmployees(emailGenerator));

const oMesmo = (number, numberSort) => number === numberSort;

const sorteio = (number, func) => {
  const numberSort = Math.round(Math.random() * 5)
  return func(number, numberSort) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(sorteio(2, oMesmo));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const count = (rightAnswers, studentAnswers, func) => {
  let count = 0;

  for (let i = 0; i < rightAnswers.length; i += 1) {
    count += func(rightAnswers[i], studentAnswers[i]);
  }
  return `${count} Pontos!!`;
};
console.log(count(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));
