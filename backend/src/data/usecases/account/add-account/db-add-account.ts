import { AddAccountRepository } from './../../../protocols/db/add-account-repository';
import { Hasher } from './../../../protocols/criptography/hasher';
import { AccountModel } from './../../../../domain/model/account';
import { AddAccount, AddAccountParams } from './../../../../domain/usecases/account/add-account';

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository
  ) {}

  async add (data: AddAccountParams): Promise<AccountModel> {
    const hashedPassword = await this.hasher.hash(data.password)
    const account = await this.addAccountRepository.add(Object.assign({}, data, { password: hashedPassword }))
    return account
  }
}