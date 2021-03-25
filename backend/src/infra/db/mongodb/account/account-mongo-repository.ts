import { LoadAccountByEmailRepository } from './../../../../data/protocols/db/load-account-by-email-repository';
import { MongoHelper } from '../helpers/mongo-helper';
import { AddAccountParams } from './../../../../domain/usecases/account/add-account';
import { AccountModel } from './../../../../domain/model/account';
import { AddAccountRepository } from './../../../../data/protocols/db/add-account-repository';

export class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository {
  async add (data: AddAccountParams): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(data)
    const account = result.ops[0]
    return MongoHelper.map(account)
  }

  async loadByEmail (email: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ email })
    return account && MongoHelper.map(account)
  }
}