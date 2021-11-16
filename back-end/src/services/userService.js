const Joi = require('joi');   
const md5 = require('md5');
const { User } = require('../database/models');

const RegisterSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const register = async ({ name, email, password, role }) => {
  const { error } = RegisterSchema.validate({ name, email, password });
  
  if (error) throw generateError(422, error.message);
  
  const existentUser = await findByEmail(email);
  
  if (existentUser) throw generateError(409, 'Email already registered.');
  
  const cryptPassword = md5(password);
  const user = await User.create({ 
    name, email, password: cryptPassword, role: role || 'customer' });
  const userWithoutPassword = removePassword(user.dataValues);
  
  return {
    user: userWithoutPassword,
  };
};

module.exports = {
  RegisterSchema,
  register
};
