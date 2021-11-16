const database = require('../database/models');
const { createJWT } = require('../auth/authJWT');

const login = async (email, password) => {
  const user = await database.user.findOne({ where: { email, password } });
  if (user === null) return { status: 404, message: { message: 'Incorrect username or password' } };
  const { name, role } = user;
  const token = createJWT({ name, email, role });
  console.log(token);
  return { status: 200, message: { token, name, email, role } };
};

// Criando o endpoint do cadastro do usuário
const register = async (name, email, password) => {
  const user = await database.user.findOne({ where: { email, name } });
  if (user) return { status: 409, message: { message: 'Conflict' } }; // verificar se usuario já é registrado
  const userRegistred = await database.user.create({ 
    name, email, password, role: 'customer' });
   
    console.log(userRegistred.dataValues);
    
  return { status: 201,
            message: { 
              name: userRegistred.dataValues.name,
              email: userRegistred.dataValues.email,
              password: userRegistred.dataValues.password,
          } };
};

const getAllUsers = async () => {
  const users = await database.user.findAll();
  const response = { status: 200, message: { users } };
  return response;
};

module.exports = {
  login,
  register,
  getAllUsers,
};
