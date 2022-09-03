// 1
function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

console.log(soma(5, 5));
console.log(sub(5, 5));
console.log(mult(5, 5));
console.log(div(5, 5));
console.log(mod(5, 5));

// 2
function maior(a, b) {
  if (a < b) {
    return b + ' é maior que ' + a
  } else {
    return a + ' é maior que ' + b
  }
}

console.log(maior(5, 10));

// 3
function maiorNumber(a, b, c) {
  if (a > b && a > c) {
    return a + ' é o maior';
  } else if (b > a && b > c) {
    return b + ' é o maior';
  } else {
    return c + ' é o maior';
  }
}

console.log(maiorNumber(10, 15, 5));

// 4
function sinal(number) {
  if (number < 0) {
    return "negative";
  } else if (number > 0) {
    return "positive";
  } else {
    return "zero";
  }
}

console.log(sinal(-2));

// 5

function triangulo(anguloA, anguloB, anguloC) {
  if (anguloA > 0 && anguloB > 0 && anguloC > 0) {
    if (anguloA + anguloB + anguloC === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Inválido";
  }
}

console.log(triangulo(80, 60, -40));
