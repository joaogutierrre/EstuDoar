import request from 'supertest';
import { MongoHelper } from './../../infra/db/mongodb/helpers/mongo-helper';
import { Collection } from "mongodb";
import app from '../config/app';
import env from '../config/env';
import { sign } from 'jsonwebtoken';

let studentCollection: Collection

describe('Student Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    studentCollection = await MongoHelper.getCollection('students')
    await studentCollection.deleteMany({})
  })

  describe('GET /feed/students', () => {
    test('should return 204 on load all students if have no students', async () => {
      await request(app)
        .get('/api/feed/students')
        .expect(204)
    });
  });
});