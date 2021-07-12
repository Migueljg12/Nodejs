import routes from './src/routes'
import handleErrors from './src/middleware/handle-error'
import { envVars } from './src/config/env'

const express = require('express')
const bodyParser = require('body-parser')

const { APP_PORT, NODE_ENV } = envVars.general

const app = express()

app.use(bodyParser.json())
app.use('/', routes)
app.use(handleErrors)

app.listen(APP_PORT, () => console.log(`Example app listening at http://localhost:${APP_PORT} in ${NODE_ENV} environment`))
