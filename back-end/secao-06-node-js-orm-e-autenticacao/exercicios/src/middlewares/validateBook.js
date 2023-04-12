const httpErrGenerator = require('../utils/httpErrorGenerator');
const BooksService = require('../services/book.service')

const validateBookExist = async (req, _res, next) => {
  const { id } = req.params;
  const book = await BooksService.getById(id);
  if (!book) {
    throw httpErrGenerator(404, 'Book not found');
  }
  next();
};
const validateUpdate = async (req, _res, next) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updatedBook = await BooksService.updateBook(id, { title, author, pageQuantity });
  if (!updatedBook) {
    throw httpErrGenerator(404, 'Book not found');
  }
  next();
};

module.exports = {
  validateBookExist,
  validateUpdate,
};