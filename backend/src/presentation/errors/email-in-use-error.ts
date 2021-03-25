export class EmailInUseError extends Error {
  constructor () {
    super('Este email já está em uso')
    this.name = 'EmailInUseError'
  }
}