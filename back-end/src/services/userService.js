const jwt = require('jsonwebtoken');
const path = require('path');
const md5 = require('md5');
const fs = require('fs');
const { User } = require('../database/models');
const errorMap = require('../utils/errorMap');

const SECRET = fs.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), 'utf8');

const CUSTOMER_ROLE = 'customer';

const create = async (user) => {
  try {
    const { password } = user;
    const userAlreadyExists = await User.findOne({ where: { email: user.email } });
    
    if (userAlreadyExists) return errorMap.userAlreadyExists;
    
    const passwordMD5 = md5(password);
    
    const result = await User.create(
      { name: user.name, email: user.email, password: passwordMD5, role: CUSTOMER_ROLE },
    );

    const { dataValues: { id, name, email } } = result;
    const payload = { id, name, email };
    const options = { expiresIn: '1d' };

    const token = jwt.sign(payload, SECRET, options);
    
    return { token };
  } catch (_error) {
    return errorMap.internalError;
  }
};

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
