import request from 'supertest';
import app from '../config/app';

describe('GET /cities/:schools', () => {
    test('should return a list of schools on success', async () => {
        const schools = '3304557'
        await request(app)
            .get(`/api/cities/${schools}`)
            .expect(200)
    })
});