const jwt = require('jsonwebtoken');
const md5 = require('md5');
const fs = require('fs');
const path = require('path');

const { user: userModel } = require('../../database/models');

exports.findAll = async () => {
  const users = await userModel.findAll({});
  return users;
};

exports.login = async ({ email, password }) => {
  const jwtPath = path.resolve(__dirname, '..', '..', '..', 'jwt.evaluation.key');
  const JWT_SECRET = fs.readFileSync(jwtPath, 'utf8');
  const hashedPassword = md5(password);
  const user = await userModel.findOne(
    { where: { email, password: hashedPassword } },
  );
  if (user) return {
    token: jwt.sign({ email }, JWT_SECRET, { expiresIn: '12h' }),
    name: user.name,
    email: user.email,
    role: user.role
  }; 
  return null;
};

exports.create = async ({ fullName: name, email, password }) => {
  const hashedPassword = md5(password);
  const jwtPath = path.resolve(__dirname, '..', '..', '..', 'jwt.evaluation.key');
  const JWT_SECRET = fs.readFileSync(jwtPath, 'utf8');
  const user = await userModel.findOne({ where: [{ name }, { email }] });
  if (user) return null;
  await userModel.create({ name, email, password: hashedPassword, role: 'customer' });
  return jwt.sign({ email }, JWT_SECRET, { expiresIn: '12h' });
};
