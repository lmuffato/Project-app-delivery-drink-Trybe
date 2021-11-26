const { Router } = require('express');

const productsMiddlewares = require('./productsMiddlewares'); 

const router = Router();

router.get('/',
productsMiddlewares.getAll,
async () => {});
/* REQUISIÇÃO:
http GET :3001/users
*/

router.post('/',
productsMiddlewares.createNew,
async () => {});
/* REQUISIÇÃO:
http POST :3001/users displayName='LucasMuffato' email='lucas@gmail.com' password='lucas123456' image='lucas'
http POST :3001/users displayName='Lucas' email='lucas' password='lucas' image='lucas'
*/

router.get('/:id',
productsMiddlewares.getById,
async () => {});
/* REQUISIÇÃO:
http GET :3001/users/1
*/

router.get('/order/:id',
productsMiddlewares.getManyById,
async () => {});

router.put('/:id',
productsMiddlewares.updateById,
async () => {});
/* REQUISIÇÃO:
http PUT :3001/users/3 displayName='Lucas' email='lucas@gmail.com' password='Senha123' image='www.google.com'
*/

router.delete('/:id',
productsMiddlewares.deleteById,
async () => {});
/* REQUISIÇÃO:
http DELETE :3001/users/4
*/

module.exports = router;
