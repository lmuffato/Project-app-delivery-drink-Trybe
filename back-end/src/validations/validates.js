const { HTTP_SERVER_ERROR } = require('../status');

const validate = (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email) || password.length < 6 || name.length < 12) {
      throw new Error('invalid data');
    } else {
      next();
    }
  } catch (e) {
    return res.status(HTTP_SERVER_ERROR).json({ error: e.message });
  }
};

module.exports = {
  validate,
};