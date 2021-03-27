import { UpdateAccessTokenRepository } from './../../../protocols/db/update-access-token-repository';
import { Encrypter } from './../../../protocols/criptography/encrypter';
import { HashComparer } from './../../../protocols/criptography/hash-comparer';
import { LoadAccountByEmailRepository } from './../../../protocols/db/load-account-by-email-repository';
import { Authentication, AuthenticationParams } from './../../../../domain/usecases/account/authentication';

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly updateAccessTokenRepository: UpdateAccessTokenRepository
  ) {}

  async auth (data: AuthenticationParams): Promise<string> {
    const { email, password } = data
    const account = await this.loadAccountByEmailRepository.loadByEmail(email)
    if (account) {
      const isValid = await this.hashComparer.compare(password, account.password)
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.id)
        await this.updateAccessTokenRepository.updateAccessToken(account.id, accessToken)
        return accessToken
      }
    }
    return null
  }
}