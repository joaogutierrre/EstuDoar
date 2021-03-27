import { LoadAccountByEmailRepository } from './../../../protocols/db/load-account-by-email-repository';
import { Authentication, AuthenticationParams } from './../../../../domain/usecases/account/authentication';

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) {}

  async auth (data: AuthenticationParams): Promise<string> {
    const { email, password } = data
    this.loadAccountByEmailRepository.loadByEmail(email)
    return null
  }
}