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

const filterChocolateByName = async (query) => {
  const cacauTrybe = await readFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.name.toLowerCase().includes(query.toLowerCase()));
};

const writeFile = async (content) => {
  try {
    await fs.writeFile(chocolatesPath, JSON.stringify(content));
  } catch (err) {
    console.error('Erro ao salvar o arquivo', err.message);
    return null;
  }
}

const updateChocolate = async (id, update) => {
  const cacauTrybe = await readFile();
  const chocolateToUpdate = cacauTrybe.chocolates.find(
    (chocolate) => chocolate.id === id,
  );

  if (chocolateToUpdate) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.map((chocolate) => {
        if (chocolate.id === id) return { ...chocolate, ...update };
        return chocolate;
      });

    await writeFile(cacauTrybe);
    return { ...chocolateToUpdate, ...update };
  }

  return false;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  filterChocolateByName,
  updateChocolate
};
