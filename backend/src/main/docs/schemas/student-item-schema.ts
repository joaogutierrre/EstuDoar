export const studentItemSchema = {
  type: 'object',
  properties: {
    category: {
      type: 'string'
    },
    quantity: {
      type: 'number'
    },
    donated: {
      type: 'number'
    }
  }
}