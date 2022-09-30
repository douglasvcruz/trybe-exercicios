const techList = (arrayTechnologies, name) => {
  if (arrayTechnologies.length === 0) return 'Vazio!';

  const sortedArray = arrayTechnologies.sort();
  const technologyList = [];

  sortedArray.forEach((item) => {
    technologyList.push({
      tech: item,
      name: name,
    });
  });

return technologyList;
};

module.exports = techList;