const { TodoModel } = require('../models')

async function getAll (req, res) {
  try {
    const todos = await TodoModel.findAll()
    res.json(todos)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAll
}
