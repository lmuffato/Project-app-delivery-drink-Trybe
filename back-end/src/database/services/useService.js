const { User } = require('../models');
const { HTTP_CREATED, HTTP_CONFLICT } = require('../../status');
const { createToken } = require('../../validations/auth/validateJWT');

async function readByEmailService(email) {
  const user = await User.findOne({ where: { email } });
  return user;
};

async function createUserService({ name, email, password, role }) {
  const isUserResgistered = await readByEmailService(email);

  if (isUserResgistered) {
    return { isRegistered: true, code: HTTP_CONFLICT, error: "User already registered" };
  }

  await User.create({name, email, password, role });

  const userLogin = { name, email, role};

  const token = await createToken(userLogin);

  const data = { name, email, role, token };

  return { data, code: HTTP_CREATED};
};

module.exports = {
  createUserService,
  readByEmailService,
};