const INTERNAL_SERVER_ERROR = 500;
const handleErros = (err, _req, res, _next) => {
  res.status(err.statusCode || INTERNAL_SERVER_ERROR).json({ message: err.message || err.error });
};

module.exports = handleErros;
