export const rolesSchema = {
  type: 'array',
  items: {
    $ref: '#/schemas/role'
  }
}