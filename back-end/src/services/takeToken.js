const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET || 'segredo';

const takeToken = (token) => {
    const { payload } = jwt.verify(token, SECRET);
    return payload;
};

module.exports = takeToken;