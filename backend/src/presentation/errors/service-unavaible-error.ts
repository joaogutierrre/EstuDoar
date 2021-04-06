export class ServiceUnavaibleError extends Error {
  constructor () {
    super('Serviço externo indisponível no momento')
    this.name = 'ServiceUnavaibleError'
  }
}