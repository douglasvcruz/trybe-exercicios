const BooksService = require('../services/book.service');

const getAll = async (_req, res) => {
  const books = await BooksService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await BooksService.getById(id);
    res.status(200).json(book);
  } catch (e) {
    next(e);
  }
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await BooksService.createBook(title, author, pageQuantity );
  res.status(201).json(newBook);
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    await BooksService.updateBook(id, req.body);
    res.status(201).json({ message: 'Book updated' });
  } catch (e) {
    next(e);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    await BooksService.deleteBook(id);
    res.status(200).json({ message: 'Book removed' });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};