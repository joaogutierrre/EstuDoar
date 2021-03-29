import request from 'supertest';
import { MongoHelper } from './../../infra/db/mongodb/helpers/mongo-helper';
import { Collection } from "mongodb";
import app from '../config/app';
import env from '../config/env';
import { sign } from 'jsonwebtoken';

let studentCollection: Collection

const makeAccessToken = async (): Promise<string> => {
  const res = await studentCollection.insertOne({
    name: 'any_name',
    email: 'any_email@email.com',
    cpf: '11111111111',
    password: '123',
    role: 'admin'
  })
  const id = res.ops[0]._id
  const accessToken = sign({ id }, env.jwtSecret)
  await studentCollection.updateOne({
    _id: id
  }, {
    $set: {
      accessToken
    }
  })
  return accessToken
}

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

  describe('POST /students', () => {
    test('should return 403 on add student without accessToken', async () => {
      await request(app)
        .post('/api/students')
        .send({
          name: 'any_name',
          school: 'any_school',
          items: [{
            category: 'any_category',
            quantity: 1
          }, {
            category: 'other_category',
            quantity: 2
          }]
        })
        .expect(403)
    });

    test('should return 200 on add student with valid accessToken', async () => {
      const accessToken = await makeAccessToken()
      await request(app)
        .post('/api/students')
        .set('x-access-token', accessToken)
        .send({
          name: 'any_name',
          school: 'any_school',
          items: [{
            category: 'any_category',
            quantity: 1
          }, {
            category: 'other_category',
            quantity: 2
          }]
        })
        .expect(200)
    })
  });
});