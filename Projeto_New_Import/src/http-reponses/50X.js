class InternalServerError extends Error {
  constructor() {
    super()
    this.name = 'Internal Server Error'
    this.statusCode = 500
  }
}

export default InternalServerError
