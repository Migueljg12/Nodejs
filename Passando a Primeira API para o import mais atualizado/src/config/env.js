const { APP_PORT, NODE_ENV } = process.env

export const envVars = {
  general: {
    APP_PORT,
    NODE_ENV
  },
  database: {
    MSSQL_DATABASE: process.env.MSSQL_DATABASE,
    MSSQL_HOST: process.env.MSSQL_HOST,
    MSSQL_USERNAME: process.env.MSSQL_USERNAME,
    MSSQL_PASSWORD: process.env.MSSQL_PASSWORD
  }
}
