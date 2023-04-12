require('express-async-errors');
const express = require('express');
const BooksController = require('./controllers/book.controller');
const { validateBookExist } = require('./middlewares/validateBook')
const errorHandler = require('./middlewares/errorHandler');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', BooksController.getAll);

app.get('/books/:id', validateBookExist, BooksController.getById);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));