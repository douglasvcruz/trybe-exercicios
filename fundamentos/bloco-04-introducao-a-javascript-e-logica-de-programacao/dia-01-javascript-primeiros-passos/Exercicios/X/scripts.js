const valorCusto = 50 * 1.2;
const valorVenda = 100;

if (valorCusto < 0 || valorVenda < 0) {
    console.log('error');
} else {
    const lucro = (valorVenda - valorCusto) * 1000
    console.log(lucro);
};

