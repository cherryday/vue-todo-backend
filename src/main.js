require('dotenv').config()
const express = require('express')
const app = express()
const sequelize = require('./db')
const routes = require('./controllers')

app.use(routes)

async function start () {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(process.env.PORT, () => {
      console.log('Server started...');
    })
  } catch (err) {
    console.log(err)
  }
}

start()
