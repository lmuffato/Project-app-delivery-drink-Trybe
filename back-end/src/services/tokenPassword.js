const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET || 'segredo';

const passwordToken = (paylod) => {
    const token = jwt.sign({ paylod }, SECRET);
    return token;
}

module.exports = passwordToken;