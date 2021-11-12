const { readFileSync } = require('fs');
const jwt = require('jsonwebtoken');

const SECRET = './jwt.evaluation.key';
const RESULT_SECRET = readFileSync(SECRET, 'utf-8');

const create = (payload) => {
  const token = jwt.sign(payload, RESULT_SECRET);
  return token;
};

const verify = (token) => {
  const payload = jwt.verify(token, RESULT_SECRET);
  return payload;
};

module.exports = { create, verify };