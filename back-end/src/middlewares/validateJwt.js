const jwt = require('jsonwebtoken');
const httpStatus = require('../utils/httpStatus');
const errorMessages = require('../utils/errorMessages');

const secret = process.env.JWT_SECRET || 'secret_key';

const verify = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

const validateJWT = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) { 
      return res.status(httpStatus.unauthorized).json({ message: errorMessages.tokenNotFound });
    }

    const payload = verify(token);
    req.payload = payload;
    req.user = payload;

    return next();
  } catch (_e) {
    res.status(httpStatus.unauthorized).json({ message: errorMessages.invalidToken });
  }
};

module.exports = {
  validateJWT,
  verify,
};
