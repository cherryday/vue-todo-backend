const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const TodoModel = sequelize.define('todo', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false }
})

module.exports = { TodoModel }
