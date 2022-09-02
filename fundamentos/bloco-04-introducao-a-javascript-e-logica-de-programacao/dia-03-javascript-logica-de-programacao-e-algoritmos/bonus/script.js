// Bonus 1
// let n = 5;
// let asterisco = '*';
// let linhas = '';

// for (let i = 0; i < n; i += 1) {
//   linhas += asterisco;
// }

// for(let i = 0; i < n; i += 1) {
//   console.log(linhas);
// }

// Bonus 2
// let n = 5;
// let asterisco = '*';
// let linhas = '';

// for (let i = 0; i < n; i += 1) {
//   linhas += asterisco;
//   console.log(linhas);
// }

// Bonus 3
// let n = 5;
// let asterisco = '*';
// let linhas = '';
// let espace = n;

// for (let i = 0; i <= n; i += 1) {
//   for (let i2 = 0; i2 < n; i2 += 1) {
//     if (i2 < espace) {
//       linhas = linhas + ' ';
//     } else {
//       linhas = linhas + asterisco;
//     }
//   }
//   console.log(linhas);
//   linhas = '';
//   espace -= 1;
// }

// Bonus 4
// let n = 5;
// let asterisco = '*';
// let linhas = '';
// let meio = (n + 1) / 2
// let right = meio
// let left = meio

// for (let i = 0; i <= meio; i += 1) {
//   for (let i2 = 0; i2 <= n; i2 += 1) {
//     if (i2 > left && i2 < right) {
//       linhas = linhas + asterisco;
//     } else {
//       linhas = linhas + ' ';
//     }
//   }
//   console.log(linhas);
//   linhas = '';
//   right += 1;
//   left -= 1;
// }

// Bonus 5
let n = 7;
let meio = (n + 1) / 2;
let right = meio;
let left = meio;
let asterisco = '*';

for (let i = 1; i <= meio; i += 1) {
  let linhas = '';
  for (let i2 = 1; i2 <= n; i2 += 1) {
    if (i2 == left || i2 == right || i == meio) {
      linhas += asterisco;
    } else {
      linhas += ' ';
    }
  }
  left -= 1;
  right += 1;
  console.log(linhas);
}