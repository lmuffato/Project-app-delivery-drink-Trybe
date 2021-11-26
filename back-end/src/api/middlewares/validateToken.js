const { StatusCodes } = require('http-status-codes');
const { parseToken } = require('../../utils/parseToken');

/** @type {import('express').RequestHandler} */
const validateToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Missing token' });
  try {
    const { email, role } = parseToken({ token });
    req.token = { email, role };
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Malformed token' });
    }
    console.error(error.message);
    next(error);
  }
};

module.exports = validateToken;
