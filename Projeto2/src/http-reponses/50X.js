class InternalServerError extends Error {
  constructor() {
    super()
    this.name = 'Internal Server Error'
    this.statusCode = 500
  }
}

module.exports = InternalServerError
