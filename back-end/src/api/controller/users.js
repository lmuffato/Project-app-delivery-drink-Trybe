const {
  StatusCodes: { CREATED, OK, INTERNAL_SERVER_ERROR },
} = require('http-status-codes');

const { User: users } = require('../../database/models');
const tokenGen = require('../tokenGenerator');

const loginUser = async (req, res, next) => {
  try {
    const user = await users
    .findOne({ where: { email: req.body.email, password: req.body.password } });
    const token = tokenGen(req.body);
    const { name, email, role } = user.dataValues;
    const userLocal = { name, email, role, token };
    res.status(OK).json(userLocal);
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

const findAllSellers = async (req, res, next) => {
  try {
    const sellers = await users.findAll({ where: { role: 'seller' } });
    res.status(OK).json(sellers);
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

const createNewUser = async (req, res, next) => {
  try {
    users.create(req.body);
    return res.status(CREATED).json({ message: 'User Created' });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  loginUser,
  createNewUser,
  findAllSellers,
};