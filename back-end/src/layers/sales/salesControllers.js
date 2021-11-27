const { Router } = require('express');

const salesMiddlewares = require('./salesMiddlewares'); 

const router = Router();

router.get('/',
salesMiddlewares.getAll,
async () => {});
/* REQUISIÇÃO:
http GET :3001/sales
*/

router.get('/order/:id',
salesMiddlewares.getSaleAndSaleProducts,
async () => {});
/* REQUISIÇÃO:
http GET :3001/users
*/

router.get('/orderfull/:id',
salesMiddlewares.getOrderFull,
async () => {});
/* REQUISIÇÃO:
http GET :3001/users
*/

router.get('/allordersbycustomer',
salesMiddlewares.getAllOrdersByCustomers,
async () => {});

router.get('/getsellerorders',
salesMiddlewares.getAllOrdersBySellerId,
async () => {});

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

router.patch('/updatesale/:id',
salesMiddlewares.updateStatus,
async () => {});

router.get('/:id',
salesMiddlewares.getById,
async () => {});
/* REQUISIÇÃO:
http GET :3001/users/1
*/

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

/* BACKUP
const getSaleAndSaleProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = await sales.findAll({
      where: { id },
      include:
        [
          { model: products,
            include: {
              model: salesProducts,
            },
            as: 'products',
          // attributes: [[Sequelize.literal('salesProducts.quantity'), 'quantidade']],
        },
        ],
        attributes: [
          [Sequelize.literal('sales.id'), 'code'],
          // [Sequelize.literal('salesProducts.quantity'), 'quantidade'],
        ],
      });
    return res.status(200).json(obj);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
*/
