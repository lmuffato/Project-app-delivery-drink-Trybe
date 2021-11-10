const { user } = require('../database/models/user')

const login = async (email, password) => {
  const user = await user.findOne({ email, password});
  return user;
};

const createUser = async (name, email, password) => {
  const newUser = await user.create({ name, email, password });
  return newUser;
};


module.exports = {
  login,
  createUser
}