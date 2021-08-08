const { TodoModel } = require('./todo')
const { TodoItemModel } = require('./todoItem')

TodoModel.hasMany(TodoItemModel)
TodoItemModel.belongsTo(TodoModel)

module.exports = {
  TodoModel,
  TodoItemModel
}
