const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (!teams.some((a) => a.id === id)) {
    return res.sendStatus(404).json({ message: 'Time não encontrado' });
  }
  next();
};

module.exports = existingId;