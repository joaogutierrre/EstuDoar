export const serviceUnavaible = {
  description: 'Serviço indisponível',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}