const GeneralError = require('../http-reponses/GeneralError')

class NotFoundError extends GeneralError {
  constructor(paramName, paramValue) {
    super()
    this.name = 'Not Found Error'
    this.error = `${paramName} [${paramValue}] not found!`
    this.statusCode = 404
  }
}

module.exports = {
  NotFoundError
}
