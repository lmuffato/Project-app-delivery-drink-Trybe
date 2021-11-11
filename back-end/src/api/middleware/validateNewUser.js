const {
  INVALID_EMAIL,
  NAME_SHORTER_THAN_ALLOWED,
  PASSWORD_SHORTER_THAN_ALLOWED,
} = require('../messages/errorMessages');

const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;

  return regex.test(email);
};

module.exports = async (req, res, next) => {
  const { name, email, password } = req.body;

  const emailIsValid = validateEmail(email);

  if (!emailIsValid) {
    return res.status(400).json({ message: INVALID_EMAIL });
  }

  if (name.length < 12) {
    return res.status(400).json({ message: NAME_SHORTER_THAN_ALLOWED });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: PASSWORD_SHORTER_THAN_ALLOWED });
  }

  next();
};
