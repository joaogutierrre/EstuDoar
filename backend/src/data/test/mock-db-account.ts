import { LoadAccountByTokenRepository } from './../protocols/db/account/load-account-by-token-repository';
import { UpdateAccessTokenRepository } from '../protocols/db/account/update-access-token-repository';
import { LoadAccountByEmailRepository } from '../protocols/db/account/load-account-by-email-repository';
import { mockAccountModel } from './../../domain/test/mock-account';
import { AddAccountRepository } from '../protocols/db/account/add-account-repository';
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

export class UpdateAccessTokenRepositorySpy implements UpdateAccessTokenRepository {
  id: string
  accessToken: string
  async updateAccessToken (id: string, accessToken: string): Promise<void> {
    this.id = id
    this.accessToken = accessToken
    return Promise.resolve(null)
  }
}

export class LoadAccountByTokenRepositorySpy implements LoadAccountByTokenRepository {
  token: string
  role: string
  result: object
  async loadByToken (token: string, role?: string): Promise<AccountModel> {
    this.token = token
    this.role = role
    this.result = mockAccountModel()
    return mockAccountModel()
  }
}