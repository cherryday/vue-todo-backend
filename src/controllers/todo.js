const { Router } = require('express')
const router = Router()
const { getAll } = require('../services/todo')

router.get('/todo', getAll)

module.exports = { todoController: router }
