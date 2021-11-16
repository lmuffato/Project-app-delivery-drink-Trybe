const { readFileSync } = require('fs');
const jwt = require('jsonwebtoken');

const SECRET = './jwt.evaluation.key';
const RESULT_SECRET = readFileSync(SECRET, 'utf-8').replace('\n', '');

const create = (payload) => jwt.sign(payload, RESULT_SECRET);

const verify = (token) => jwt.verify(token, RESULT_SECRET);

module.exports = { create, verify };
