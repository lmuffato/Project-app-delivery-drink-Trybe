const { user: userModel } = require('../../database/models');

exports.findAll = async () => {
  const users = await userModel.findAll({});
  return users;
};
