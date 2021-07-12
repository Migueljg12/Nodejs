require('dotenv/config')

const { APP_PORT, NODE_ENV } = process.env

// const DATABASE = process.env.MSSQL_DATABASE
// const HOST = process.env.MSSQL_HOST
// const USERNAME = process.env.MSSQL_USERNAME
// const PASSWORD = process.env.MSSQL_PASSWORD

const menu = {
  porta: {
    APP_PORT,
    NODE_ENV
  },
  dados: {
    DATABASE: process.env.MSSQL_DATABASE,
    HOST: process.env.MSSQL_HOST,
    USERNAME: process.env.MSSQL_USERNAME,
    PASSWORD: process.env.MSSQL_PASSWORD
  }
}

module.exports = menu
