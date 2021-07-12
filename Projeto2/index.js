const express = require('express')
const bodyParser = require('body-parser')

const { Port, Dev } = require('./src/config/env')
const { APP_PORT } = Port
const { NODE_ENV } = Dev

const app = express()

const routes = require('./src/routes')
const handleErrors = require('./src/middleware/handle-error')

app.use(bodyParser.json())
app.use('/', routes)
app.use(handleErrors)

app.listen(APP_PORT, () => console.log(`Example app listening at http://localhost:${APP_PORT} in ${NODE_ENV} environment`))
