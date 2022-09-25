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

const noite = (obj, key, value) => {
  obj[key] = value;
}

noite(lesson2, 'turno', 'noite')
console.log(lesson2);

const listar = (obj) => console.log(Object.keys(obj));

listar(lesson1);

const tamanho = (obj) => Object.keys(obj).length;

console.log(`Possui ${tamanho(lesson1)} objetos`);

const listar1 = (obj) => console.log(Object.values(obj));

listar1(lesson1);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

const totalStudents = (obj) => {
  let total = 0;
  const objetos = Object.keys(obj)

  for (const i in objetos) {
    total += obj[objetos[i]].numeroEstudantes;
  }
  return total;
}

console.log(totalStudents(allLessons));

const lugar = (obj, position) => console.log(Object.values(obj)[position]);

lugar(lesson1, 0)

const par = (obj, key, value) => {
  const objeto = Object.entries(obj);
  let igual = false;

  for (const i in objeto) {
    if (objeto[i][0] === key && objeto[i][1] === value) igual = true; 
  }
  return igual;
};

console.log(par(lesson3, 'professor', 'Maria Clara'));
console.log(par(lesson3, 'professora', 'Maria Clara'));