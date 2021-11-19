const { StatusCodes } = require('http-status-codes');
const { parseToken } = require('../../utils/parseToken');

/** @type {import('express').RequestHandler} */
const validateToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Missing token' });
  try {
    parseToken({ token });
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Malformed toekn' });
    }
    console.error(error.message);
    next(error);
  }
};

module.exports = validateToken;