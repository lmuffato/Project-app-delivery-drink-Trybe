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
  const jwtEvaluationKey = path.resolve(__dirname, '..', '..', '..', 'jwt.evaluation.key');
  const JWT_SECRET = fs.readFileSync(jwtEvaluationKey, 'utf8');
  const hashedPassword = md5(password);
  const user = await userModel.findOne(
    { where: { email, password: hashedPassword } },
  );
  if (user) return jwt.sign({ email }, JWT_SECRET, { expiresIn: '12h' }); 
  return null;
};
