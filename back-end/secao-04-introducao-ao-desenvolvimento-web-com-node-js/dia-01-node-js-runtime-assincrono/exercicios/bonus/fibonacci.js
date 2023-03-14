const readline = require("readline-sync");

const fibonacci = (quantity) => {
  let a = 1;
  let b = 1;
  for (let n = quantity; n >= 2; n -= 1) {
    if (b) {
      console.log(b);
      const temp = a;
      a += b;
      b = temp;
    }
  }
  console.log(b);
  return b;
};

const main = () => {
  const n = readline.question("Insira quantos quer: ");
  if (n <= 0) {
    console.log('Enter a number greater then \'0\'!');
    return;
  }
  console.log(`n: ${n}`);
  fibonacci(n);
};

main();
