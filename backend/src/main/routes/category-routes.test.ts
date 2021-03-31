import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper';
import request from 'supertest';
import app from '../config/app';

describe('Category Routes', () => {
    beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL)
    })

    afterAll(async () => {
        await MongoHelper.disconnect()
    })

    beforeEach(async () => {
        const categoryCollection = await MongoHelper.getCollection('categories')
        await categoryCollection.deleteMany({})
    })

    test('should return a category on success', async() => {
        await request(app)
        .get('/api/category')
        .expect(200)
    })
});