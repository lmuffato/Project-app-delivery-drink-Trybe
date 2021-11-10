const { HTTP_BAD_REQUEST, HTTP_SERVER_ERROR } = require('../status');

const validateEmail = (req, res, next) => {
 try {
   const { email } = req.body;
   const emailRegex = /\S+@\S+\.\S+/;

   if (!emailRegex.test(email)) return res.status(HTTP_BAD_REQUEST).json({ message: '"email" must be a valid email' });

   next();
 } catch (e) {
   return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
 }
};

const validatePassword = (req, res, next) => {
  try {
    const { password } = req.body;

    if (password.length < 6) return res.status(HTTP_BAD_REQUEST).json({ message: '"password" length must be 6 characters long' });

    next();
  } catch (e) {
    return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
  }
};

const validateName = (req, res, next) => {
  try {
    const { name } = req.body;

    if (name.length < 12) return res.status(HTTP_BAD_REQUEST).json({ message: '"name" length must be 12 characters long' });
  } catch (e) {
    return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
  }
};

module.exports = {
  validateEmail,
  validatePassword,
  validateName,
};