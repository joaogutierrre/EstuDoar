export const feedStudentPath = {
  get: {
    tags: ['Estudante'],
    summary: 'API para listar todos os estudantes',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/students'
            }
          }
        }
      },
      204: {
        $ref: '#/components/noContent'
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