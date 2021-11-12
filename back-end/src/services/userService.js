const database = require('../database/models');
const { createJWT } = require('../auth/authJWT');

const login = async (email, password) => {
  const user = await database.User.findOne({ where: { email, password } });
  if (user === null) return { status: 404, message: { message: 'Incorrect username or password' } };
  const { name, role } = user;
  const token = createJWT({ name, email, role });
  return { status: 200, message: { token, name, email, role } };
};

// Criando o endpoint do cadastro do usuário
const register = async (name, email, password) => {
  const user = await database.User.findOne({ where: { email, name } });
  if (user) return { status: 409, message: { message: 'There is a user with your email' } }; // verificar se usuario já é registrado
  const userRegistred = await database.User.create({ 
    name, email, password, role: 'customer' });
  return { status: 201, message: { userRegistred } };
};

const getAllUsers = async () => {
  const users = await database.User.findAll();
  const response = { status: 200, message: { users } };
  return response;
};

module.exports = {
  login,
  register,
  getAllUsers,
};
