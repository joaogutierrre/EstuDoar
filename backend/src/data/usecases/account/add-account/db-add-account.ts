import { Hasher } from './../../../protocols/criptography/hasher';
import { AccountModel } from './../../../../domain/model/account';
import { AddAccount, AddAccountParams } from './../../../../domain/usecases/account/add-account';

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher
  ) {}

  async add (data: AddAccountParams): Promise<AccountModel> {
    const hashedPassword = this.hasher.hash(data.password)
    return null
  }
}