const jwt = require('jsonwebtoken');
const path = require('path')

const SECTRE_KEY = require('fs')
  .readFileSync(
    path.join(__dirname, '..', '..', 'jwt.evaluation.key'),
    { encoding: 'utf-8'},
  ).trim();

const passwordToken = (payload) => {
    const token = jwt.sign({ payload }, SECTRE_KEY);
    return token;
};

module.exports = passwordToken;
