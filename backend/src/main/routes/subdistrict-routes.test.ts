import request from 'supertest';
import app from '../config/app';

describe('GET /cities/:subdistricts', () => {
    test('should return a list of subdistricts on success', async () => {
        const subdistricts = '3304557'
        await request(app)
            .get(`/api/cities/${subdistricts}`)
            .expect(200)
    })
});