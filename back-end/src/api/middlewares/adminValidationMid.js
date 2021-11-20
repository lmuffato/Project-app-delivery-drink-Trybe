const { verify } = require('jsonwebtoken');

require('dotenv').config();
const { SECRET } = process.env;

const HTTP_UNAUTHORIZED_STATUS = 401;

const ERROR_MESSAGE = {
  message: 'Missing auth token',
};

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json(ERROR_MESSAGE);
  }
  try {
    const { dataValues: { role } } = verify(token, SECRET);
    if (role !== 'administrator') {
      return res.status(HTTP_UNAUTHORIZED_STATUS).json({
        message: 'You are not authorized to perform this action',
      });
    }
  } catch (error) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({
      message: 'Invalid token',
    });
  }
  next();
};