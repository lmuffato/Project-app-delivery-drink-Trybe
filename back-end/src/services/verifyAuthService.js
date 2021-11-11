const validateToken = require('../auth/validateToken');

 const clientError = require('../utils/clientError');

 const verifyAuthService = async (token) => {
    if (!token) return clientError.unauthorized('Sent Empty Token');

   const decode = await validateToken(token);

   if (!decode) return (clientError.unauthorized('Token Expired Or Invalid'));

   const { name, email, id } = decode;
   
   return { name, email, id };
 };

module.exports = {
  verifyAuthService,
};
