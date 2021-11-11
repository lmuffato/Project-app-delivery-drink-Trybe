const router = require('express').Router();
const controlSales = require('../controller/sales');
const validateTWD = require('../middleware/validateJWT');

router.post('/', validateTWD, validation.recipeCreateValidation, controlRecipes.controlCreate);
router.get('/', controlRecipes.controlGetAll);
router.get('/:id', controlRecipes.controlGetById);
router.put('/:id', validateTWD, controlRecipes.controlUpdate);
router.delete('/:id', validateTWD, controlRecipes.controlDelete);

module.exports = router;