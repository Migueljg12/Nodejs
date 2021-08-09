export class HttpOK {
  constructor(content) {
    this.name = 'OK'
    this.content = content
    this.statusCode = 200
  }
}

export class HttpCreated {
  constructor(content) {
    this.name = 'Created'
    this.content = content
    this.statusCode = 201
  }
}
