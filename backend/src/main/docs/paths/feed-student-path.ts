export const feedStudentPath = {
  get: {
    tags: ['Estudante'],
    summary: 'API para listar todos os estudantes por filtro dinâmico e opcional',
    parameters: [{
      in: 'path',
      name: 'uf',
      required: false,
      schema: {
        type: 'string'
      }
    }, {
      in: 'path',
      name: 'city',
      required: false,
      schema: {
        type: 'string'
      }
    }, {
      in: 'path',
      name: 'school',
      required: false,
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