const fs = require('fs').promises;

const readAll = async () => {
  const content = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(content);
  const strings =  simpsons.map(({id, name}) => `${id} - ${name}`)

  strings.forEach((b) => console.log(b))
}

const readPromise = async (id) => {
  const content = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(content);
  const idSimpsons =  simpsons.find((a) => Number(a.id) === id);

  if (!idSimpsons) {
    throw new Error('id não encontrado');
  }
  return idSimpsons;
}

const removeSimpsons = async () => {
  const content = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(content);
  const newArray =  simpsons.filter((a) => a.id !== '10' && a.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

const writeFamily = async () => {
  const content = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(content);

  const ids = [1, 2, 3, 4]
  const newArray = simpsons.filter((a) => ids.includes(Number(a.id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArray));
}

const writePeople = async () => {
  const contentFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(contentFamily);

  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

const writePeopleTwo = async () => {
  const content = await fs.readFile('./simpsonsFamily.json', 'utf-8')
  const simpsonsFamily = JSON.parse(content);

  const filteredArray = simpsonsFamily.filter((a) => a.name !== 'Nelson Muntz');
  const newArray = [ ...filteredArray, { id: '15', name: 'Maggie Simpson' }]

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArray));
}

const main = async () => {
  await removeSimpsons();
  await readAll();
  const simpson = await readPromise(2);
  console.log(simpson);
  await writeFamily();
  await writePeople();
  await writePeopleTwo();
}

main();