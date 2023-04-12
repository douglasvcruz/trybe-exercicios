const httpErrGenerator = require('../utils/httpErrorGenerator');
const { User } = require('../models');

const validateBookExist = async (req, _res, next) => {
  const { id } = req.params;
  const book = await User.findByPk(id);
  if (!book) {
    throw httpErrGenerator(404, 'Book not found');
  }
  next();
};

module.exports = {
  validateBookExist,
};