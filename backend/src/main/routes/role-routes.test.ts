import { MongoHelper } from "../../infra/db/mongodb/helpers/mongo-helper";
import request from 'supertest';
import app from "../config/app";


describe('Role Routes', () => {
    beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL)
    })

    afterAll(async () => {
        await MongoHelper.disconnect()
    })

    beforeEach(async () => {
        const roleCollection = await MongoHelper.getCollection('roles')
        await roleCollection.deleteMany({})
    })

    test('should return a role on success', async() => {
        await request(app)
        .get('/api/role')
        .expect(200)
    })
});