const { Router } = require('express');

const imagesMiddlewares = require('./imagesMiddlewares'); 

const router = Router();

router.get('/',
imagesMiddlewares.getAll,
async () => {});
/* REQUISIÇÃO:
http GET :3001/images
*/

module.exports = router;
