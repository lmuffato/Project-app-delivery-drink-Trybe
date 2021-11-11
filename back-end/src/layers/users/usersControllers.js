const { Router } = require('express');

const userMiddlewares = require('./usersMiddlewares'); 

const router = Router();

router.get('/',
userMiddlewares.getAll,
async () => {});
/* REQUISIÇÃO:
http GET :3001/users
*/

router.post('/',
async () => {});
/* REQUISIÇÃO:
http POST :3001/users displayName='LucasMuffato' email='lucas@gmail.com' password='lucas123456' image='lucas'
http POST :3001/users displayName='Lucas' email='lucas' password='lucas' image='lucas'
*/

router.get('/:id',
async () => {});
/* REQUISIÇÃO:
http GET :3001/users/1
*/

router.put('/:id',
async () => {});
/* REQUISIÇÃO:
http PUT :3001/users/3 displayName='Lucas' email='lucas@gmail.com' password='Senha123' image='www.google.com'
*/

router.delete('/:id',
// userMiddleware.deleteById,
async () => {});
/* REQUISIÇÃO:
http DELETE :3001/users/4
*/

module.exports = router;
