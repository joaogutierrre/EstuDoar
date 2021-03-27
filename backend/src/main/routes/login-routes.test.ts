import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper';
import request from 'supertest'
import app from '../config/app'
import { hash } from 'bcrypt';
import { Collection } from 'mongodb';

let accountCollection: Collection

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('should return an account on success', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'any_name',
          email: 'any_email@email.com',
          cpf: '11111111111',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
    })
  });

  describe('POST /login', () => {
    test('should return 200 on login', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'any_name',
        email: 'any_email@email.com',
        cpf: '11111111111',
        password: password,
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'any_email@email.com',
          password: '123'
        })
        .expect(200)
    });

    test('should return 401 on login with invalid credentials', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'any_email@email.com',
          password: '123'
        })
        .expect(401)
    });
  });
});