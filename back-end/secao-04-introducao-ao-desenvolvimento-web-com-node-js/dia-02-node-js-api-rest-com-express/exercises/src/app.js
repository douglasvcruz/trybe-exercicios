const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();

app.use(express.json());

const moviesPath = path.resolve(__dirname, "./movies.json");

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (err) {
    console.log(`Arquivo não pode ser lido ${err}}`);
  }
};

// const main = async () => {
//   console.log(await readFile());
// };

// main();

app.get("/movies", async (req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json({ movies });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const movieFind = movies.find((a) => a.id === Number(id));
    res.status(200).json(movieFind);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.post("/movies", async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.put("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile();
    const index = movies.findIndex((a) => a.id === Number(id));
    movies[index] = {
      id: Number(id),
      movie,
      price,
    };
    const updatedMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(200).json(movies[index]);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.delete("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const filteredMovies = movies.filter((a) => a.id !== Number(id));
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;
