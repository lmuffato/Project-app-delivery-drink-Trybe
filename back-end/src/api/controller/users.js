const {
  StatusCodes: { CREATED, OK, INTERNAL_SERVER_ERROR, NO_CONTENT },
} = require('http-status-codes');

const { User } = require('../../database/models');
const tokenGen = require('../tokenGenerator')
const loginUser = (req, res, next) => {
  try {
    const user = User.findOne({ where: { email: req.body.email, password: req.body.password } })
    const token = tokenGen(req.body);
    res.status(OK).json({token, user});
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

const createNewUser = async (req, res, next) => {
  try {
    User.create(req.body);
    if (newUser) return res.status(CREATED).json({ message: 'User Created'});
  } catch (e) {
    next(e);
  }
};


module.exports = {
  loginUser,
  createNewUser,
};