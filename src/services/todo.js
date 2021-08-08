const { TodoModel } = require('../models')

async function getAll (req, res) {
  try {
    const todos = await TodoModel.findAll()
    res.json(todos)
  } catch (err) {
    console.log(err)
  }
}

async function create (req, res) {
  const { name } = req.body

  try {
    const todo = await TodoModel.create({ name })
    res.json(todo)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAll,
  create
}
