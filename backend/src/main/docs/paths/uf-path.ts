export const ufPath = {
  get: {
    tags: ['Localidade'],
    summary: 'API para listar todos os estados',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/ufs'
            }
          }
        }
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}