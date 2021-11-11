const { validateEmail } = require('./validateEmail');
const { validatePassword } = require('./validatePassword');
const { validateName } = require('./validateName');

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
}; 
