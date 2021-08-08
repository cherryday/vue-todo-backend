const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const TodoItemModel = sequelize.define('todo_item', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  completed: { type: DataTypes.BOOLEAN, defaultValue: false }
})

module.exports = { TodoItemModel }
