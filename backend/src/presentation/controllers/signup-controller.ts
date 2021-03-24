import { Validation } from './../protocols/validation';
import { Authentication } from './../../domain/usecases/account/authentication';
import { EmailInUseError } from './../errors/email-in-use-error';
import { serverError, forbidden, ok } from './../helpers/http/http-helper';
import { AddAccount } from './../../domain/usecases/account/add-account';
import { HttpRequest, HttpResponse } from './../protocols/http';
import { Controller } from './../protocols/controller';

export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly authentication: Authentication,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      this.validation.validate(httpRequest.body)
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
      const accessToken = await this.authentication.auth({
        email,
        password
      })
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}