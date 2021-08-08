const { Router } = require('express')
const router = Router()
const { todoController } = require('./todo')

router.use('/api', todoController)

module.exports = router
