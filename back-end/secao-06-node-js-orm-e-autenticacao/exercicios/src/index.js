require('express-async-errors');
const express = require('express');
const BooksController = require('./controllers/book.controller');
const { validateBookExist, validateUpdate, validateDelete } = require('./middlewares/validateBook')
const errorHandler = require('./middlewares/errorHandler');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', BooksController.getAll);

app.get('/books/:id', validateBookExist, BooksController.getById);

app.post('/books', BooksController.createBook);

app.put('/books/:id', validateUpdate, BooksController.updateBook);

app.delete('/books/:id', validateDelete, BooksController.deleteBook);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));