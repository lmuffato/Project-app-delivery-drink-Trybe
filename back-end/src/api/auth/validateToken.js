const jwt = require('jsonwebtoken');
const { MISSING_AUTH_TOKEN, JWT_MALFORMED } = require('../messages/errorMessages');

const secret = process.env.SECRET || 'e717vdd^DEp.';

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ data: MISSING_AUTH_TOKEN });

  try {
    const token = jwt.verify(authorization, secret);

    if (!token) {
      return res.status(401).json({ data: JWT_MALFORMED });
    }

    req.user = token;
    req.auth = authorization;

    next();
  } catch (error) {
    return res.status(401).json({ data: error.message });
  }

  return false;
};

module.exports = {
  validateToken,
};
