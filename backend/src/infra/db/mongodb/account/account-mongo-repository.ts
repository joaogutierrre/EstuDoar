import { MongoHelper } from './../../../helpers/mongo-helper';
import { AddAccountParams } from './../../../../domain/usecases/account/add-account';
import { AccountModel } from './../../../../domain/model/account';
import { AddAccountRepository } from './../../../../data/protocols/db/add-account-repository';

export class AccountMongoRepository implements AddAccountRepository {
  async add (data: AddAccountParams): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(data)
    const account = result.ops[0]
    return MongoHelper.map(account)
  }
}