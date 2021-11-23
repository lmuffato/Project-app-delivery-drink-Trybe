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

  if (!myUser) {
    return { status: 404, message: 'email não cadastrado' };
  }
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const payLoad = { name: myUser.name, email: myUser.email, role: myUser.role, id: myUser.id };
  const token = jwt.sign(payLoad, secret, jwtConfig);
  return { status: 200, data: myUser, token };
};

const register = async ({ name, email, password, role }) => {
  const { error } = RegisterSchema.validate({ name, email, password });

  if (error) {
  return { code: 422, message: 'Invalid Data' };
  }

  const findUserByEmail = await user.findOne({ where: { email } });
  const findUserByName = await user.findOne({ where: { name } });
 
  if (findUserByEmail || findUserByName) {
    return { code: 409, message: 'User Already Registered' };
  }

  const cryptPassword = md5(password);
  const newUser = await user.create({ 
    name, email, password: cryptPassword, role: role || 'customer' });

  return newUser;
};

const getSelers = async () => {
  const selers = await user.findAll({ where: { role: 'seller' } });
  return { status: 200, data: selers };
};

const getUsers = async () => {
  const users = await user.findAll();
  return { status: 200, data: users };
};

const deleteUser = async (email) => {
  await user.destroy({ where: { email } });
  const users = await getUsers();
  return { status: 201, data: users };
};

module.exports = {
  getUserbyEmail,
  RegisterSchema,
  register,
  getSelers,
  getUsers,
  deleteUser,
};
