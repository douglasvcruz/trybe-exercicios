const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const totalStudents = (obj) => {
  let total = 0;
  const objetos = Object.keys(obj)

  for (const i in objetos) {
    if (obj[objetos[i]].materia === 'Matemática') {
      total += obj[objetos[i]].numeroEstudantes;
    }
  }
  return total;
}

console.log(totalStudents(allLessons));

const info = (obj, name) => {
  const allLessons = [];
  let allStudents = 0;
  const valor = Object.values(obj);

  for (const i in valor) {
    if (valor[i].professor === name) {
      allLessons.push(valor[i].materia);
      allStudents += valor[i].numeroEstudantes;
    }
  }
  return { aulas: allLessons, Estudantes: allStudents }
}

const correspondente = (allLessons, name) => {
  const corresponde = {};
  corresponde.professor = name;
  Object.assign(corresponde, info(allLessons, 'Maria Clara'));
  return corresponde;
}

console.log(correspondente(allLessons, 'Maria Clara'));


