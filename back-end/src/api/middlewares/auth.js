const JWT = require('jsonwebtoken');
const path = require('path');
const jwtKey = require('fs')
  .readFileSync(path.resolve(__dirname, '../../../jwt.evaluation.key'),
    { encoding: 'utf-8' }).trim();
const { UNAUTHORIZED, NOT_FOUND } = require('../services/statusCode');
const { userLogin } = require('../services/userService');

const JWT_CONFIG = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userLogin(email, password);
    const userToken = {
      email: user.email,
      name: user.name,
      role: user.role,
    };
    const token = JWT.sign({ data: userToken }, jwtKey, JWT_CONFIG);

    req.token = token;
    next();
  } catch (error) {
    return res.status(NOT_FOUND).json({ message: error.message });
  }
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(UNAUTHORIZED).json({ message: 'invalid JWT' });

  try {
    const decoded = JWT.verify(token, jwtKey);
    
    req.decoded = decoded.data;
    next();
  } catch (err) {
    return res.status(UNAUTHORIZED).json({ message: 'invalid JWT' });
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
