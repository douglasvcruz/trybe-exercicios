const anguloA = 80;
const anguloB = 60;
const anguloC = -40;

if (anguloA > 0 && anguloB > 0 && anguloC > 0) {
    if (anguloA + anguloB + anguloC === 180) {
        console.log(true)
    } else {
        console.log(false)
    }
} else {
    console.log("Inválido")
}



/* 🚀 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um
triângulo.Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.Se algum ângulo for
  inválido o programa deve retornar uma mensagem de erro.
 */