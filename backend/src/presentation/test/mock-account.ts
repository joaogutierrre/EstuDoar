import { mockAccountModel } from './../../domain/test/mock-account';
import { AccountModel } from './../../domain/model/account';
import { AddAccount, AddAccountParams } from './../../domain/usecases/account/add-account';

export class AddAccountSpy implements AddAccount {
  data: object
  result: object
  async add (data: AddAccountParams): Promise<AccountModel> {
    this.data = data
    const account = mockAccountModel()
    this.result = account
    return account
  }
}