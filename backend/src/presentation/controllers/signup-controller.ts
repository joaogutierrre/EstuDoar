import { EmailInUseError } from './../errors/email-in-use-error';
import { serverError, forbidden } from './../helpers/http/http-helper';
import { AddAccount } from './../../domain/usecases/account/add-account';
import { HttpRequest, HttpResponse } from './../protocols/http';
import { Controller } from './../protocols/controller';

export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, email, cpf, password } = httpRequest.body
      const account = await this.addAccount.add({
        name,
        email,
        cpf,
        password
      })
      if (!account) {
        return forbidden(new EmailInUseError())
      }
    } catch (error) {
      return serverError(error)
    }
  }
}