const jwt = require('jsonwebtoken');
const path = require('path');
const segredo = require('fs')
.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), { encoding: 'utf-8' }).trim();

require('dotenv').config();

const JWT_SECRET = segredo;

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const data = jwt.verify(authorization, JWT_SECRET);

    if (data.role === 'administrator') {
      next();
    } else {
      return res.status(401).json({ message: 'Only administrator can acess this page' });
    }
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
