const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

for (const i in coolestTvShow) {
  console.log(i);
}

console.log(Object.keys(coolestTvShow));

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const habilidades = (student) => {
  const lista = Object.keys(student)
  for (const i in lista) {
    console.log(`${lista[i]}, Nivel: ${student[lista[i]]}`)
  }
};

console.log('Estudante 1');
habilidades(student1)

console.log('Estudante 2');
habilidades(student2)