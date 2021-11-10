const jwt = require('jsonwebtoken');

const SECRET = require('../../../jwt.evaluation.key');

const jwtConfig = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const createToken = (userData) => jwt.sign({ data: userData }, SECRET, jwtConfig);

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);

    req.user = decoded;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  createToken,
  verifyToken,
};