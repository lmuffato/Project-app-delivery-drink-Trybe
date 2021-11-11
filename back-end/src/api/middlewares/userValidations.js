const { Op } = require('sequelize');
const { user } = require('../../database/models');
const { CONFLICT, UNAUTHORIZED } = require('../services/statusCode');

const findUserByNameOrEmail = async (req, res, next) => {
  const { email, name } = req.body;
  const registredUser = await user.findOne({
    where: { [Op.or]: [{ email }, { name }] },
  });

  if (registredUser) {
    return res.status(CONFLICT).json({ message: 'Usuário já cadastrado.' });
  }
  next();
};

const verifyRoleAdmin = async (req, res, next) => {
  const userAdmin = req.decoded;

  if (userAdmin.role !== 'administrator') {
    res
      .status(UNAUTHORIZED)
      .json({ message: 'Usuário deve ser um administrador!' });
  } else {
    next();
  }
};

const validUserData = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status().json();
  
  next();
};

module.exports = {
  findUserByNameOrEmail,
  verifyRoleAdmin,
  validUserData,
};
