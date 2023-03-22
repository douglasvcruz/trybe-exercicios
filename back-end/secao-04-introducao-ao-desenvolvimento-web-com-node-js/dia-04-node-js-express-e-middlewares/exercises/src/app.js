const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');

const app = express();

app.use(express.json());

app.post('/activities', validateName, validateDescription, 
validatePrice, validateRating, validateDifficulty, (_req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
})

module.exports = app;