const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce((acc, item) => acc.concat(item), []);

console.log(flatten());

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


const reduceNames = () => books.reduce((acc, book) => `${acc} ${book.author.name}.`, '');

console.log(reduceNames());

const averageAge = () => books.reduce((acc, book) => (acc + (book.releaseYear - book.author.birthYear)), 0) / books.length;

console.log(averageAge());

const longestNamedBook = () => books.reduce((acc, book) => acc.name.length > book.name.length ? acc : book);

console.log(longestNamedBook());

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => {
  let totalOfLettersA = 0;
  names.forEach((name) => {
    const lettersFromName = name.split('');
    totalOfLettersA += lettersFromName.reduce((lettersAInName, currentLetter) =>
      (currentLetter === 'a' || currentLetter === 'A') ? lettersAInName + 1 : lettersAInName, 0);
  });
  return totalOfLettersA;
}

console.log(containsA());

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => {
  return test = students.map((student, i) => (
    {
      name: student,
      average: grades[i].reduce((acc, curr) => acc + curr, 0) / grades[i].length,
    }
  ));
}

console.log(studentAverage());

