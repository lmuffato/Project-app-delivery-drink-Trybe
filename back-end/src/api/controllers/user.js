const serviceUser = require('../services/user');

const getAllUser = async (_req, res) => {
  const { status, data } = await serviceUser.getAllUser();
  res.status(status).json(data);
};

module.exports = {
  getAllUser,
};
