import request from 'supertest'
import app from '../config/app'

describe('LoadCitiesByUf Routes', () => {
  test('should return a list of cities on success', async () => {
    const uf = '35'
    await request(app)
      .get(`/api/loadcities/${uf}`)
      .expect(200)
  })
});