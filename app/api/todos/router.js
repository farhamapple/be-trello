var express = require('express');
var router = express.Router();

const { getAll, create, getById } = require('./controller')


router.get('/todos', getAll);
router.post('/todos', create);
router.get('/todos/:id', getById);

module.exports = router;
