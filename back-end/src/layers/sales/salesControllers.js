const { Router } = require('express');

const salesMiddlewares = require('./salesMiddlewares'); 

const router = Router();

router.get('/',
salesMiddlewares.getAll,
async () => {});
/* REQUISIÇÃO:
http GET :3001/sales
*/

router.post('/',
salesMiddlewares.createNew,
async () => {});
/* REQUISIÇÃO:
http POST :3001/users displayName='LucasMuffato' email='lucas@gmail.com' password='lucas123456' image='lucas'
http POST :3001/users displayName='Lucas' email='lucas' password='lucas' image='lucas'
*/

router.post('/createsale',
salesMiddlewares.createSale,
salesMiddlewares.createManySaleProducts,
async () => {});
/* REQUISIÇÃO:
req = {
  { userId, totalPrice, deliveryAddress, deliveryNumber, status },
    "saleProducts": [{ quantity, productId }, { quantit, productId }]
  }  
}

http POST :3001/users displayName='LucasMuffato' email='lucas@gmail.com' password='lucas123456' image='lucas'
http POST :3001/users displayName='Lucas' email='lucas' password='lucas' image='lucas'
*/

router.get('/:id',
salesMiddlewares.getSalesBySellerId,
async () => {});
/* REQUISIÇÃO:
http GET :3001/users/1
*/

// router.get('/seller/:id',
// salesMiddlewares.getById,
// async () => {});

router.put('/:id',
salesMiddlewares.updateById,
async () => {});
/* REQUISIÇÃO:
http PUT :3001/users/3 displayName='Lucas' email='lucas@gmail.com' password='Senha123' image='www.google.com'
*/

router.delete('/:id',
salesMiddlewares.deleteById,
async () => {});
/* REQUISIÇÃO:
http DELETE :3001/users/4
*/

module.exports = router;
