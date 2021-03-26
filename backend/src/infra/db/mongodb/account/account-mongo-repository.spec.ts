import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account-mongo-repository';
import { mockAddAccountParams } from './../../../../domain/test/mock-account';
import { Collection } from "mongodb";

let accountCollection: Collection

describe('AccountMongoRepository', () => {
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

  type SutTypes = {
    sut: AccountMongoRepository
  }

  const makeSut = (): SutTypes => {
    const sut = new AccountMongoRepository()
    return {
      sut
    }
  }

  describe('add()', () => {
    test('should return an account on add success', async () => {
      const { sut } = makeSut()
      const accountParams = mockAddAccountParams()
      const account = await sut.add(accountParams)
      expect(account).toBeTruthy()
      expect(account.id).toBeTruthy()
      expect(account.name).toBe(accountParams.name)
      expect(account.email).toBe(accountParams.email)
      expect(account.cpf).toBe(accountParams.cpf)
      expect(account.password).toBe(accountParams.password)
    })
  });

  describe('loadByEmail()', () => {
    test('should return an account on loadByEmail success', async () => {
      const { sut } = makeSut()
      await accountCollection.insertOne(mockAddAccountParams())
      const account = await sut.loadByEmail('any_email@email.com')
      expect(account).toBeTruthy()
      expect(account.id).toBeTruthy()
      expect(account.name).toBe('any_name')
      expect(account.email).toBe('any_email@email.com')
      expect(account.password).toBe('any_password')
    });

    test('should return null if loadByEmail fails', async () => {
      const { sut } = makeSut()
      const account = await sut.loadByEmail('any_email@email.com')
      expect(account).toBeFalsy()
    });
  });
});