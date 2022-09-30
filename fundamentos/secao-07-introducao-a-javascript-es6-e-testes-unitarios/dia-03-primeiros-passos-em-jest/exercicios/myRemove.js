function myRemove(arr, item) {
  let newArr = [];
  arr.forEach((itens) => {
    if (item !== itens) {
      newArr.push(itens);
    }
  });
  return newArr;
}

// implemente seus testes aqui
module.exports = myRemove;