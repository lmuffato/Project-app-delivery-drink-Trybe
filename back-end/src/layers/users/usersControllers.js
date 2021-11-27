const { Router } = require('express');

const userMiddlewares = require('./usersMiddlewares');
const admRoleMiddleware = require('../authentication/authMiddleware');

const router = Router();

router.get('/',
userMiddlewares.getAll,
async () => {});
/* REQUISIÇÃO:
http GET :3001/users
*/

router.get('/sellers',
userMiddlewares.getAllSellers,
async () => {});
/* REQUISIÇÃO:
http GET :3001/sellers
*/

router.get('/customers',
userMiddlewares.getAllCustomers,
async () => {});
/* REQUISIÇÃO:
http GET :3001/sellers
*/

router.post('/create',
userMiddlewares.createNew,
async () => {});
/* REQUISIÇÃO:
http POST :3001/users displayName='LucasMuffato' email='lucas@gmail.com' password='lucas123456' image='lucas'
http POST :3001/users displayName='Lucas' email='lucas' password='lucas' image='lucas'
*/

router.post('/login',
userMiddlewares.login,
async () => {});
/* REQUISIÇÃO:
http POST :3001/login
*/

router.post('/getUserByEmail',
userMiddlewares.getUserByEmail,
async () => {});
/* REQUISIÇÃO:
http POST :3001/login
*/

router.post('/createbyadmin',
admRoleMiddleware.validateAdmRole,
userMiddlewares.createByAdmin,
async () => {});

router.post('/token',
userMiddlewares.verifyTokenNotExpired,
async () => {});
/* REQUISIÇÃO:
http POST :3001/login
*/

router.get('/:id',
userMiddlewares.getById,
async () => {});
/* REQUISIÇÃO:
http GET :3001/users/1
*/

router.put('/:id',
userMiddlewares.updateById,
async () => {});
/* REQUISIÇÃO:
http PUT :3001/users/3 displayName='Lucas' email='lucas@gmail.com' password='Senha123' image='www.google.com'
*/

router.delete('/:id',
userMiddlewares.deleteById,
async () => {});
/* REQUISIÇÃO:
http DELETE :3001/users/4
*/

module.exports = router;
