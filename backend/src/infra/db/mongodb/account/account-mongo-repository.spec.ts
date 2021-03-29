import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account-mongo-repository';
import { mockAddAccountParams } from './../../../../domain/test/mock-account';
import { Collection } from "mongodb";

type SutTypes = {
  sut: AccountMongoRepository
}

const makeSut = (): SutTypes => {
  const sut = new AccountMongoRepository()
  return {
    sut
  }
}

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

  describe('updateAccessToken()', () => {
    test('should update the account accessToken on updateAccessToken success', async () => {
      const { sut } = makeSut()
      const res = await accountCollection.insertOne(mockAddAccountParams())
      const fakeAccount = res.ops[0]
      expect(fakeAccount._id.accessToken).toBeFalsy()
      await sut.updateAccessToken(fakeAccount._id, 'any_token')
      const account = await accountCollection.findOne({ _id: fakeAccount._id })
      expect(account).toBeTruthy()
      expect(account.accessToken).toBe('any_token')
    });
  });

  describe('loadByToken()', () => {
    test('should return an account on loadByToken without role success', async () => {
      const { sut } = makeSut()
      await accountCollection.insertOne({
        name: 'any_name',
        email: 'any_email@email.com',
        cpf: 'any_cpf',
        password: 'any_password',
        accessToken: 'any_token'
      })
      const account = await sut.loadByToken('any_token')
      expect(account).toBeTruthy()
      expect(account.id).toBeTruthy()
      expect(account.name).toBe('any_name')
      expect(account.email).toBe('any_email@email.com')
      expect(account.cpf).toBe('any_cpf')
      expect(account.password).toBe('any_password')
    });

    test('should return an account on loadByToken with admin role', async () => {
      const { sut } = makeSut()
      await accountCollection.insertOne({
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password',
        accessToken: 'any_token',
        role: 'admin'
      })
      const account = await sut.loadByToken('any_token', 'admin')
      expect(account).toBeTruthy()
      expect(account.id).toBeTruthy()
      expect(account.name).toBe('any_name')
      expect(account.email).toBe('any_email@email.com')
      expect(account.password).toBe('any_password')
    });

    test('should return an account on loadByToken if user is admin', async () => {
      const { sut } = makeSut()
      await accountCollection.insertOne({
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password',
        accessToken: 'any_token',
        role: 'admin'
      })
      const account = await sut.loadByToken('any_token')
      expect(account).toBeTruthy()
      expect(account.id).toBeTruthy()
      expect(account.name).toBe('any_name')
      expect(account.email).toBe('any_email@email.com')
      expect(account.password).toBe('any_password')
    })

    test('should return null on loadByToken with invalid role', async () => {
      const { sut } = makeSut()
      await accountCollection.insertOne({
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password',
        accessToken: 'any_token'
      })
      const account = await sut.loadByToken('any_token', 'admin')
      expect(account).toBeFalsy()
    })

    test('should return null if loadByToken fails', async () => {
      const { sut } = makeSut()
      const account = await sut.loadByToken('any_token')
      expect(account).toBeFalsy()
    })
  });
});