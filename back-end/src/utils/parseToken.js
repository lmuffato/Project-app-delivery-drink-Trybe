const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

exports.getSecretKey = () => {
  const jwtPath = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');
  return fs.readFileSync(jwtPath, 'utf8').trim();
};

exports.parseToken = ({ token }) => {
  const JWT_SECRET = this.getSecretKey();
  return jwt.verify(token, JWT_SECRET);
};
