const fs = require('fs').promises;

const fileNames = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
  'file4.txt',
  'file5.txt',
];

async function writeFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  try {
    const createWritePromises = strings.map((s, i) => fs.writeFile(`./file${i + 1}.txt`, s));
    await Promise.all(createWritePromises);
    const readFilesPromises = fileNames.map((f) => fs.readFile(f, 'utf-8'));
    const fileContents = await Promise.all(readFilesPromises);
    const newFileContent = fileContents.join(' ');
    await fs.writeFile('./fileAll.txt', newFileContent);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
};

writeFile();