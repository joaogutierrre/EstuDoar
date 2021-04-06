export const cityPath = {
  get: {
    tags: ['Localidade'],
    summary: 'API para listar todas as cidades a partir do id de um estado',
    parameters: [{
      in: 'path',
      name: 'uf',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/cities'
            }
          }
        }
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      },
      503: {
        $ref: '#/components/serviceUnavaible'
      }
    }
  }
}