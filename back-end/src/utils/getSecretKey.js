const fs = require('fs');
const path = require('path');

exports.getSecretKey = () => {
  const jwtPath = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');
  return fs.readFileSync(jwtPath, 'utf8').trim();
};
