const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET || 'segredo';

const passwordToken = (payload) => {
    const token = jwt.sign({ payload }, SECRET);
    return token;
};

module.exports = passwordToken;