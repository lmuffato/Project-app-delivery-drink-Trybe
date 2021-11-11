const md5 = require('md5');
const registerServices = require('./registerService');
const createToken = require('../auth/createToken');
const loginSchema = require('../schemas/loginSchema');
const clientError = require('../utils/clientError');

let dataLoginDB = null;
const login = async (dataForLogin) => {
  const { error } = loginSchema.login.validate(dataForLogin);

  if (error) return clientError.badRequest(error.details[0].message);

  try {
    const { dataValues } = await registerServices.getByEmail(dataForLogin.email);
    dataLoginDB = dataValues;
  } catch (err) {
    return clientError.notFound('User Not registered');
  }

  const hashLogin = md5(dataForLogin.password);

  if (dataLoginDB.password !== hashLogin) {
    return clientError.badRequest('Email or Password Invalid');
  }

  const { name, email, id, role } = dataLoginDB;
  const token = await createToken({ name, email, id, role });
  
  return { token, role, id, name, email };
};

module.exports = {
  login,
};
