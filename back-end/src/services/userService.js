const Joi = require('joi');   
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { user } = require('../database/models/index');

const RegisterSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const secret = 'secret_key';

const getUserbyEmail = async (email) => {
  const myUser = await user.findOne({ where: { email } });
  console.log(myUser);
  if (!myUser) {
    return { status: 404, message: 'email não cadastrado' };
  }
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const payLoad = { name: myUser.name, email: myUser.email, role: myUser.role };
  const token = jwt.sign(payLoad, secret, jwtConfig);
  return { status: 200, data: myUser, token };
};

const register = async ({ name, email, password, role }) => {
  const { error } = RegisterSchema.validate({ name, email, password });
  
  if (error) {
  return { status: 422, message: 'Invalid Data' };
  }

  const findUser = await user.findOne({ where: { email } });
 
  if (findUser) {
    return { code: 409, message: 'Email Already Registered' };
  }
  
  const cryptPassword = md5(password);
  const newUser = await user.create({ 
    name, email, password: cryptPassword, role: role || 'customer' });

  return newUser;
};

module.exports = {
  getUserbyEmail,
  RegisterSchema,
  register,
};
