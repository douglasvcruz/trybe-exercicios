/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i in numbers) {
    console.log(numbers[i])
} */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* let resultado = 0;
for(let i in numbers) {
    resultado += numbers[i];
};

console.log(resultado); */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;
for(let i in numbers) {
    resultado += numbers[i];
};

let media = resultado / numbers.length;

console.log(media); */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;
for(let i in numbers) {
    resultado += numbers[i];
};

let media = resultado / numbers.length;

if (media > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
} */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];

for(i in numbers) {
    if(numbers[i] > maior) {
        maior = numbers[i];
    }
}

console.log(maior) */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (i in numbers) {
    if (numbers[i] % 2 !== 0) {
        resultado += 1;
    }
}

if(resultado === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(resultado);
}

