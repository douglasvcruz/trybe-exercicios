const fs = require('fs').promises;
const path = require('path');

const chocolatesPath = path.resolve(__dirname, './files/cacauTrybeFile.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(chocolatesPath);
    return JSON.parse(data);
  } catch (err) {
    console.log(`Arquivo não pode ser lido ${err}}`);
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand
};