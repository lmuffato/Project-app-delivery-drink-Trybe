const database = require('../database/models');
const { createJWT } = require('../auth/authJWT');

const login = async (email, password) => {
  const user = await database.user.findOne({ where: { email, password } });
  if (user === null) return { status: 404, message: { message: 'Incorrect username or password' } };
  const { name, role } = user;
  const token = createJWT({ name, email, role });
  return { status: 200, message: { token, name, email, role, id: user.id } };
};

// Criando o endpoint do cadastro do usuário
const register = async (name, email, password) => {
  const user = await database.user.findOne({ where: { email } });
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

const addNewUser = async (name, email, password, role) => {
  const userEmail = await database.user.findOne({ where: { email } });
  const userName = await database.user.findOne({ where: { name } });
  if (userEmail || userName) return { status: 409, message: { message: 'Conflict' } }; // verificar se usuario já é registrado
  const userRegistred = await database.user.create({ 
    name, email, password, role });
    return { status: 201,
      message: { 
        name: userRegistred.dataValues.name,
        email: userRegistred.dataValues.email,
        role: userRegistred.dataValues.role,
    } };
};

const getAllUsers = async () => {
  const users = await database.user.findAll();
  const response = { status: 200, message: { users } };
  return response;
};

const getAllSellers = async () => {
  const sellers = await database.user.findAll({ where: { role: 'seller' } });
  const response = { status: 200, message: { sellers } };
  return response;
};

module.exports = {
  login,
  register,
  getAllUsers,
  getAllSellers,
  addNewUser,
};
