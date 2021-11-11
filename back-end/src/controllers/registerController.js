const md5 = require('md5');
const { User } = require('../models');
const httpStatus = require('../utils/httpStatus');

const registerUser = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const md5Password = md5(password);
  const newUser = await User.create({
    name,
    email,
    md5Password,
    role,
  });

  res.status(httpStatus.created).json(newUser);
  return next();
};

module.exports = {
  registerUser,
};
