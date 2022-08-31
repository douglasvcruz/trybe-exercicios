/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i in numbers) {
    console.log(numbers[i])
} */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for(let i in numbers) {
    resultado += numbers[i];
};

console.log(resultado);

