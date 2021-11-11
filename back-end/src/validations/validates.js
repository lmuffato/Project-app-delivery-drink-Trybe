const { HTTP_SERVER_ERROR } = require('../status');

const isAValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

const validateRegistration = (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    if (!isAValidEmail(email) || password.length < 6 || name.length < 12) {
      throw new Error('invalid data');
    } else {
      next();
    }
  } catch (e) {
    return res.status(HTTP_SERVER_ERROR).json({ error: e.message });
  }
};

const validateLogin = (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!isAValidEmail(email) || password.length < 6) {
      throw new Error('invalid data');
    } else {
      next();
    }
  } catch (e) {
    return res.status(HTTP_SERVER_ERROR).json({ error: e.message });
  }
};

module.exports = {
  validateRegistration,
  validateLogin
};
