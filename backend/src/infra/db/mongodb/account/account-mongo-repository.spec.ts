import { MongoHelper } from './../../../helpers/mongo-helper';
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
});