const jwt = require('jsonwebtoken');
require('dotenv').config();
// const fs = require('fs');

const { users } = require('../../database/models');

const SECRET = process.env.SECRET || 'secret_key';

const HTTP_UNATUTHORIZED_STATUS = 401;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  // const SECRET = getSecret();

  if (token === undefined) {
    return res.status(HTTP_UNATUTHORIZED_STATUS).json({ message: 'missing auth token' });
  } 

  let id;
  try {
    const userPayload = jwt.verify(token, SECRET);
    id = userPayload.dataValues.id;
  } catch (error) {
    return res.status(HTTP_UNATUTHORIZED_STATUS).json({ message: error });
  }
  
  const user = await users.findOne({ where: { id } });
  if (!user) return res.status(HTTP_UNATUTHORIZED_STATUS).json({ message: 'User not found' });
  
  const { name, email, role } = user.dataValues;
  req.user = { name, email, role };
  req.userId = id;
  
  next();
};