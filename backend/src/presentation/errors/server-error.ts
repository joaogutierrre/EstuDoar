export class ServerError extends Error {
  constructor (stack: string) {
    super('Erro interno de servidor')
    this.name = 'ServerError'
    this.stack = stack
  }
}