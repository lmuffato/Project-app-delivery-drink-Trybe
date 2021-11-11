const rescue = require('express-rescue');
const Boom = require('@hapi/boom');

const verifyAdm = rescue(async (req, _res, next) => {
  const { role } = req.dataUser;

  if (role !== 'administrator') return Boom.unauthorized('Usuario não autorizado');
  
  next();
});
module.exports = verifyAdm;
