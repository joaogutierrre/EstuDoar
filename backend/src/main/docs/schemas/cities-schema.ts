export const citiesSchema = {
  type: 'array',
  items: {
    $ref: '#/schemas/city'
  }
}