const jwt = require('jsonwebtoken');

require('dotenv').config(); // Configura o uso de variáveis de ambiente

const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

const jwtConfig = { expiresIn: '30m', algorithm: 'HS256' };

const generateToken = (payload) => jwt.sign(payload, secret, jwtConfig);

const validateAdmRole = async (req, res, next) => {
  try {
    if (!req.headers.authorization) return res.status(409).json({ message: 'forbbiden' });
    const { authorization } = req.headers;
    console.log('authorization na validateAdmRole', authorization);
    const { role } = jwt.verify(authorization, secret);
    if (!role || role !== 'administrator') return res.status(409).json({ message: 'No adm user' });
    next();
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}; 

/*

const { User } = require('../../models');

// Chave secreta usada para encriptografar os dados.
const secret = process.env.JWT_SECRET;

const jwtConfig = (timeToExpires, algorithCript) => {
  const config = { expiresIn: timeToExpires, algorithm: algorithCript };
  return config;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    throw new Error('Expired or invalid token');
  }
};

const verifyUserAndPassword = async (obj) => {
  const data = await User.findOne({ where: obj });
  if (!data || data === null || data === '') {
    throw new Error('Invalid fields');
  }
  return data;
};

const verifyUserExists = async (input, field) => {
  const obj = { [field]: input };
  const result = await User.findOne({ where: obj });
  if (result === null || !result) { throw new Error('Expired or invalid token'); }
};

// Middleware que gera o token com base nas informações do usuário
const tokenGenerator = async (req, res, _next) => {
  const { email, password } = req.body;
  const objSearch = { email, password };
  const data = await verifyUserAndPassword(objSearch);
  const { displayName, image } = data;
  // const { displayName, email, image } = req.userInfo;
  const { code } = req.http;
  const obj = { displayName, email, image };
  const token = jwt.sign(obj, secret, jwtConfig('7d', 'HS256'));
  return res.status(code).json({ token });
};

const verifyEmptyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) return res.status(401).json({ message: 'Token not found' });
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
  next();
};

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decoded = verifyToken(token);
    await verifyUserExists(decoded.email, 'email');
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

*/

module.exports = {
  generateToken,
  validateAdmRole,
};
