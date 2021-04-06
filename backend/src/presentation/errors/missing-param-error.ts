export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Parâmetro faltando: ${paramName}`)
    this.name = 'MissingParamError'
  }
}