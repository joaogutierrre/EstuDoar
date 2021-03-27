import request from 'supertest'
import app from '../config/app'

describe('LoadUfs Routes', () => {
  describe('GET /ufs', () => {
    test('should return a list of ufs on success', async () => {
      await request(app)
        .get('/api/ufs')
        .expect(200)
    })
  });
  
  describe('GET /cities/:uf', () => {
    test('should return a list of cities on success', async () => {
      const uf = '35'
      await request(app)
        .get(`/api/cities/${uf}`)
        .expect(200)
    })
  });
});