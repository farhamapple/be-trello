var express = require('express');
var router = express.Router();

const { getAll, create, getById, update, destroy } = require('./controller')


router.get('/todos', getAll);
router.post('/todos', create);
router.get('/todos/:id', getById);
router.put('/todos/:id', update);
router.delete('/todos/:id', destroy);
module.exports = router;
