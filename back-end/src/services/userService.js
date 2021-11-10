const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { User } = require('../database/models');
const errorMap = require('../utils/errorMap');
const { CREATED } = require('../utils/statusCodeMap');
require('dotenv').config();

const { SECRET } = process.env;
const CUSTOMER_ROLE = 'customer';

const create = async (user) => {
  try {
    const { name, email, password } = user;
    const userAlreadyExists = await User.findOne({ where: { email } });

    if (userAlreadyExists) return errorMap.userAlreadyExists;

    const passwordMD5 = md5(password);

    const result = await User.create({ name, email, password: passwordMD5, role: CUSTOMER_ROLE });

    return result;

  } catch (_error) {
    return errorMap.internalError;
  }
}

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

module.exports = { login, create }; 
