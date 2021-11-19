const { Router } = require('express');

const authMiddlewares = require('./authMiddleware'); 

const router = Router();

router.post('/',
authMiddlewares.verifyTokenNotExpired(),
async () => {});
/* REQUISIÇÃO:
http GET :3001/users
*/

module.exports = router;
