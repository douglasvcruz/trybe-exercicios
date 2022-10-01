const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  for (let index = 0; index < students.length; index += 1) {
    const student = students[index];
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperação';
    }
  }
}

verifyGrades();

console.log(students);

function verifyGrades1() {
  students.forEach((student, i) => {
    if (student.grade >= 60) {
      students[i].approved = 'Aprovado';
    } else {
      students[i].approved = 'Recuperação';
    }
  });
}

verifyGrades1();

console.log(students);

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);

const firstMultipleOf51 = numbers.find((n) => n % 5 === 0);

console.log(firstMultipleOf51);

