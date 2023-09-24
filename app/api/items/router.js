var express = require('express');
var router = express.Router();

const { create, getById, update, destroy, move } = require('./controller')
const { validateCreate, validateOne, validateCreateUpdate, validateMove } = require('./validation')


router.post('/items', validateCreate, create);
router.get('/items/:id', validateOne, getById);
router.put('/items/:id', validateCreateUpdate, update);
router.delete('/items/:id', validateOne, destroy);
router.put('/items/:id/move',validateMove, move);

module.exports = router;
