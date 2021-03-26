import request from 'supertest'
import app from '../config/app'

describe('LoadUfs Routes', () => {
  test('should return a list of ufs on success', async () => {
    await request(app)
      .get('/api/loadufs')
      .expect(200)
  })
});