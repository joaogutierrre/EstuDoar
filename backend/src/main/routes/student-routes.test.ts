import request from 'supertest';
import { MongoHelper } from './../../infra/db/mongodb/helpers/mongo-helper';
import { Collection } from "mongodb";
import app from '../config/app';
import env from '../config/env';
import { sign } from 'jsonwebtoken';

let studentCollection: Collection
let accountCollection: Collection

const makeAccessToken = async (role: string): Promise<string> => {
  const res = await accountCollection.insertOne({
    name: 'any_name',
    email: 'any_email@email.com',
    cpf: '11111111111',
    password: '123',
    role: role
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
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /students', () => {
    test('should return 403 on add student without accessToken', async () => {
      await request(app)
        .post('/api/students')
        .send({
          name: 'any_name',
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
        .expect(403)
    });

    test('should return 200 on add student with valid accessToken', async () => {
      const accessToken = await makeAccessToken('parent')
      await request(app)
        .post('/api/students')
        .set('x-access-token', accessToken)
        .send({
          name: 'any_name',
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
        .expect(200)
    })

    test('should return 403 on add student with invalid role', async () => {
      const accessToken = await makeAccessToken('donator')
      await request(app)
        .post('/api/students')
        .set('x-access-token', accessToken)
        .send({
          name: 'any_name',
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
        .expect(403)
    })
  });

  describe('GET /students', () => {
    test('should return 403 on load students by account without accessToken', async () => {
      await request(app)
        .get('/api/students')
        .expect(403)
    });

    test('should return 204 on load students if have no students', async () => {
      const accessToken = await makeAccessToken('parent')
      await request(app)
        .get('/api/students')
        .set('x-access-token', accessToken)
        .expect(204)
    });
  });

  describe('PUT /students', () => {
    test('should return 403 on update student by id without accessToken', async () => {
      await request(app)
        .put('/api/students')
        .send({
          id: 'any_id',
          name: 'any_name',
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
        .expect(403)
    });

    test('should return 403 on update student by id with invalid role', async () => {
      const accessToken = await makeAccessToken('donator')
      await request(app)
        .put('/api/students')
        .set('x-access-token', accessToken)
        .send({
          id: 'any_id',
          name: 'any_name',
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
        .expect(403)
    })
  });

  describe('DELETE /students', () => {
    test('should return 403 on delete student by id fails', async () => {
      const accessToken = await makeAccessToken('parent')
      await request(app)
        .delete('/api/students')
        .set('x-access-token', accessToken)
        .send({
          id: '6064c68d8cc5460089bc4a1b'
        })
        .expect(403)
    });
  });
});