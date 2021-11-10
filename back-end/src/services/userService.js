const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { User } = require('../database/models');
const errorMap = require('../utils/errorMap');
const SECRET = require('../utils/secret');

const login = async (user) => {
  try {
    const { email, password } = user;
    const passwordMD5 = md5(password);
    const result = await User.findOne({ where: { email, password: passwordMD5 } });

    if (!result) return errorMap.NotFound;

    const { dataValues } = result;

    const { id, displayName } = dataValues;

    const payload = { id, displayName };
    const options = { expiresIn: '1d' };

    const token = jwt.sign(payload, SECRET, options);

    return { token };
  } catch (error) {
    return errorMap.internalError;
  }
};

const loginGetAll = async () => {
  try {
    const users = await User.findAll();
 
    return users;
  } catch (error) {
    return errorMap.internalError;
  }
};

module.exports = { login, loginGetAll }; 
