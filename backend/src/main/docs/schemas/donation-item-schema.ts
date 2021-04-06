export const donationItemSchema = {
  type: 'object',
  properties: {
    category: {
      type: 'string'
    },
    donated: {
      type: 'number'
    }
  }
}