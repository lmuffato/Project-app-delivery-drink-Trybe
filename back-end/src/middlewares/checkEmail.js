const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Invalid entries. Email is missing' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Invalid entries. Email has wrong format' });
  }
  return next();
};

module.exports = {
  checkEmail,
};
