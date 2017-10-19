const express = require('express')
const bodyParser = require('body-parser')
const dataSource = require('./config/dataSource')
const routerIndex = require('./routes/users')

const app = express()
app.dataSource = dataSource(app)

app.set('port', 3000)
app.use(bodyParser.json())

//Rotas
routerIndex(app)

module.exports = app