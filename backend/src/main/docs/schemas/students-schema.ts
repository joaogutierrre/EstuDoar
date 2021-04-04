export const studentsSchema = {
  type: 'array',
  items: {
    $ref: '#/schemas/student'
  }
}