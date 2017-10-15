import express from 'express'
import bodyParser from 'body-parser'
import dataSource from './config/dataSource'
import routerIndex from './routes/users'

const app = express()
app.dataSource = dataSource(app)

app.set('port', 3000)
app.use(bodyParser.json())

//Rotas
routerIndex(app)

export default app