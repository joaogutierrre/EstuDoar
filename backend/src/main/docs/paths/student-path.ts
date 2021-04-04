export const studentPath = {
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
  },

  post: {
    tags: ['Estudante'],
    summary: 'API para cadastrar um estudante',
    security: [{
      apiKeyAuth: []
    }],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/addStudentParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/student'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
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