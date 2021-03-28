import { LoadAccountByTokenRepository } from '../../../protocols/db/account/load-account-by-token-repository';
import { Decrypter } from './../../../protocols/criptography/decrypter';
import { AccountModel } from './../../../../domain/model/account';
import { LoadAccountByToken } from './../../../../domain/usecases/account/load-account-by-token';

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) {}

  async load (accessToken: string, role?: string): Promise<AccountModel> {
    const token = await this.decrypter.decrypt(accessToken)
    if (token) {
      await this.loadAccountByTokenRepository.loadByToken(token, role)
    }
    return null
  }
}