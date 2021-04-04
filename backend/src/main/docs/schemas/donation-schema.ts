export const donationSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    accountId: {
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