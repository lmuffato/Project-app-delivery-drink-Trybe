const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

exports.parseToken = ({ token }) => {
  const jwtPath = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');
  const JWT_SECRET = fs.readFileSync(jwtPath, 'utf8');
  return jwt.verify(token, JWT_SECRET);
};
