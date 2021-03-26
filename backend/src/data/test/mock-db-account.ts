import { LoadAccountByEmailRepository } from './../protocols/db/load-account-by-email-repository';
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

export class LoadAccountByEmailRepositorySpy implements LoadAccountByEmailRepository {
  data: string
  result: object
  async loadByEmail (data: string): Promise<AccountModel> {
    this.data = data
    const fakeAccount = mockAccountModel()
    this.result = fakeAccount
    return fakeAccount
  }
}