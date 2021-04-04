export const donateParamsSchema = {
  type: 'object',
  properties: {
    type: {
      type: 'string'
    },
    studentId: {
      type: 'string'
    },
    items: {
      type: 'array',
      items: {
        $ref: '#/schemas/donationItem'
      }
    }
  }
}