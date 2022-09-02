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
let n = 5;
let asterisco = '*';
let linhas = '';
let espace = n;

for (let i = 0; i <= n; i += 1) {
  for (let i2 = 0; i2 < n; i2 += 1) {
    if (i2 < espace) {
      linhas = linhas + ' ';
    } else {
      linhas = linhas + asterisco;
    }
  }
  console.log(linhas);
  linhas = '';
  espace -= 1;
}
