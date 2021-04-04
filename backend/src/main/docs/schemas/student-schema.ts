export const studentSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    accountId: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    age: {
      type: 'string'
    },
    uf: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    school: {
      type: 'string'
    },
    about: {
      type: 'string'
    },
    image: {
      type: 'string'
    },
    items: {
      type: 'array',
      items: {
        $ref: '#/schemas/studentItem'
      }
    }
  }
}