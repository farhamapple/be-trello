var express = require('express');
var router = express.Router();

const { getAll, create, getById, update, destroy } = require('./controller')
const { validateCreate, validateOne, validateCreateUpdate } = require('./validation')

router.get('/todos', getAll);
router.post('/todos', validateCreate, create);
router.get('/todos/:id', validateOne, getById);
router.put('/todos/:id', validateCreateUpdate, update);
router.delete('/todos/:id', validateOne, destroy);

module.exports = router;
