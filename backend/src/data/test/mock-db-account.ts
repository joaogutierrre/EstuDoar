import { mockAccountModel } from './../../domain/test/mock-account';
import { AddAccountRepository } from './../protocols/db/add-account-repository';
import { AccountModel } from './../../domain/model/account';
import { AddAccountParams } from './../../domain/usecases/account/add-account';

export class AddAccountRepositorySpy implements AddAccountRepository {
  data: object
  result: object
  async add (data: AddAccountParams): Promise<AccountModel> {
    this.data = data
    const fakeAccount = mockAccountModel()
    this.result = fakeAccount
    return fakeAccount
  }
}