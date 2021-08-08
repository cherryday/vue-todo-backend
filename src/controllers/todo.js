const { Router } = require('express')
const router = Router()
const { getAll, create } = require('../services/todo')

router.get('/todo', getAll)
router.post('/todo', create)

module.exports = { todoController: router }
