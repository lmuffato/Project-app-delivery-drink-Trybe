const { validateEmail } = require('./validateEmail');
const { validatePassword } = require('./validatePassword');
const { validateName } = require('./validateName');
const { validateToken } = require('./validateToken');

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
  validateToken,
}; 
