module.exports = (err, _req, res, _next) => {
  console.log(err);

  if (err.code) {
    return res.status(err.code).json({ message: err.message });
  }

  res.status(500).json({ message: 'Something went wrong' });
};
