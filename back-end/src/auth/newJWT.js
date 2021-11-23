const jwt = require('jsonwebtoken');
require('dotenv').config();
const path = require('path');
const segredo = require('fs')
.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), { encoding: 'utf-8' }).trim();

const JWT_SECRET = segredo;

const newToken = (email, name, role, id) => {
  const payload = {
    email,
    name,
    role,
    id
  };

  const JWT_CONFIG = {
    algorithm: 'HS256',
    expiresIn: '1d',
  };

  const token = jwt.sign(payload, JWT_SECRET, JWT_CONFIG);
  return token;
};

module.exports = {
  newToken,
};
