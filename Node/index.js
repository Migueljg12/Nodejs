const express = require('express')
const bodyParser = require('body-parser')

const { porta } = require('./src/config/env')
const { APP_PORT, NODE_ENV } = porta

const app = express()

const routes = require('./src/routes')

app.use(bodyParser.json())
app.use('/', routes)

app.listen(APP_PORT, () => console.log(`Example app listening at http://localhost:${APP_PORT} in ${NODE_ENV} environment`))
