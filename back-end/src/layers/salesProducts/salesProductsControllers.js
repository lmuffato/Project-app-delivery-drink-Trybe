const { Router } = require('express');

const salesProductsMiddlewares = require('./salesProductsMiddlewares'); 

const router = Router();

router.get('/',
salesProductsMiddlewares.getAll,
async () => {});
/* REQUISIÇÃO:
http GET :3001/users
*/

router.post('/',
salesProductsMiddlewares.createNew,
async () => {});
/* REQUISIÇÃO:
http POST :3001/users displayName='LucasMuffato' email='lucas@gmail.com' password='lucas123456' image='lucas'
http POST :3001/users displayName='Lucas' email='lucas' password='lucas' image='lucas'
*/

router.post('/many',
salesProductsMiddlewares.createMany,
async () => {});
/* REQUISIÇÃO:
http POST :3001/users displayName='LucasMuffato' email='lucas@gmail.com' password='lucas123456' image='lucas'
http POST :3001/users displayName='Lucas' email='lucas' password='lucas' image='lucas'
*/

router.get('/:id',
salesProductsMiddlewares.getById,
async () => {});
/* REQUISIÇÃO:
http GET :3001/users/1
*/

router.put('/:id',
salesProductsMiddlewares.updateById,
async () => {});
/* REQUISIÇÃO:
http PUT :3001/users/3 displayName='Lucas' email='lucas@gmail.com' password='Senha123' image='www.google.com'
*/

router.delete('/:id',
salesProductsMiddlewares.deleteById,
async () => {});
/* REQUISIÇÃO:
http DELETE :3001/users/4
*/

module.exports = router;
