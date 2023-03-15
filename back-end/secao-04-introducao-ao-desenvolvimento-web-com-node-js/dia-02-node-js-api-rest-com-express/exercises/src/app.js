const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();

const moviesPath = path.resolve(__dirname, "./movies.json");

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data)
  } catch (err) {
    console.log(`Arquivo não pode ser lido ${err}}`);
  }
};

const main = async () => {
  console.log(await readFile());
}

main();

module.exports = app;
