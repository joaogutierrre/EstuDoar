import { Authentication, AuthenticationParams } from '../../domain/usecases/account/authentication';
import { mockAccountModel } from '../../domain/test/mock-account';
import { AccountModel } from '../../domain/model/account';
import { AddAccount, AddAccountParams } from '../../domain/usecases/account/add-account';

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

export class AuthenticationSpy implements Authentication {
  data: object
  result: string
  async auth (data: AuthenticationParams): Promise<string> {
    this.data = data
    const accessToken = 'any_token'
    this.result = accessToken
    return accessToken
  }
}