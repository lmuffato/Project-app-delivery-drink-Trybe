const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const errorMap = require('../utils/errorMap');
const SECRET = require('../utils/secret');

const login = async (user) => {
  try {
    const { email, password } = user;
    const result = await User.findOne({ where: { email, password } });

    if (!result) return errorMap.NotFound;

    const { dataValues } = result;

    // if (dataValues.password !== password) return errorMap.invalidFields;

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
