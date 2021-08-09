import GeneralError from '../http-reponses/GeneralError'

export class NotFoundError extends GeneralError {
  constructor(paramName, paramValue) {
    super()
    this.name = 'Not Found Error'
    this.error = `${paramName} [${paramValue}] not found!`
    this.statusCode = 404
  }
}
