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

module.exports = {
  getAll,
  getById,
};