const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;

  return regex.test(email);
};

module.exports = async (req, res, next) => {
  const { name, email, password } = req.body;

  const emailIsValid = validateEmail(email);

  if (!emailIsValid) {
    return res.status(400).json({ message: '"Email" must be a valid email' });
  }

  if (name.length < 12) {
    return res.status(400).json({ message: '"name" must have a minimum of 12 characters' });
  }

  if (password.length < 6) {
     return res.status(400).json({ message: '"password" must have a minimum of 6 characters' });
  }

  next();
};