require('dotenv').config();
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
// const validateCredential = require('./validateCredential');

// const SECRET = process.env.SECRET || 'segredo';

const SECRET = fs.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), {
  encoding: 'utf8',
}).trim() || 'segredo';

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });
    
    const decodedToken = jwt.verify(token, SECRET);

    req.token = decodedToken;

    next();
  } catch (_e) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};