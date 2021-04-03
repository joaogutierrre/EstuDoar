import { sign } from 'jsonwebtoken';
import request from 'supertest';
import { Collection } from 'mongodb';
import app from '../config/app';
import { MongoHelper } from './../../infra/db/mongodb/helpers/mongo-helper';
import env from '../config/env';

const makeAccessToken = async (role?: string): Promise<string> => {
  const res = await accountCollection.insertOne({
    name: 'any_name',
    email: 'any_email@email.com',
    cpf: '11111111111',
    password: '123',
    role
  })
  const id = res.ops[0]._id
  const accessToken = sign({ id }, env.jwtSecret)
  await accountCollection.updateOne({
    _id: id
  }, {
    $set: {
      accessToken
    }
  })
  return accessToken
}

let accountCollection: Collection
let donationCollection: Collection
let studentCollection: Collection

describe('Donation Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    donationCollection = await MongoHelper.getCollection('donations')
    await donationCollection.deleteMany({})
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
    studentCollection = await MongoHelper.getCollection('students')
    await studentCollection.deleteMany({})
  })

  describe('POST /donate', () => {
    test('should return an donation on success', async () => {
      const accessToken = await makeAccessToken()
      const result = await studentCollection.insertOne({
        name: 'any_name',
        age: 'any_age',
        uf: 'any_uf',
        city: 'any_city',
        school: 'any_school',
        about: 'any_about',
        image: 'any_image',
        items: [{
          category: 'any_category',
          quantity: 1,
          donated: 0
        }, {
          category: 'other_category',
          quantity: 2,
          donated: 0
        }]
      })
      const accountId = result.ops[0]._id
      await request(app)
        .post('/api/donate')
        .set('x-access-token', accessToken)
        .send({
          type: 'any_type',
          studentId: accountId,
          items: [{
            category: 'any_category',
            donated: 1
          }, {
            category: 'other_category',
            donated: 2
          }]
        })
        .expect(200)
    })
  });
});