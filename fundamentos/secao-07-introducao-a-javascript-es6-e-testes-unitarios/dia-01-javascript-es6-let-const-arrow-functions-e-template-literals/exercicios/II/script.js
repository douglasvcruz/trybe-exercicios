const fatorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i
  }
  return result
}

console.log(`Esse é o fatorial ${fatorial(6)}`);