import { ServerError } from './../../../errors/server-error';
import { serverError, unauthorized } from './../../../helpers/http/http-helper';
import { Authentication } from './../../../../domain/usecases/account/authentication';
import { HttpRequest, HttpResponse } from './../../../protocols/http';
import { Controller } from './../../../protocols/controller';

export class LoginController implements Controller {
  constructor (
    private readonly authentication: Authentication
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body
      const accessToken = await this.authentication.auth({ email, password })
      if (!accessToken) {
        return unauthorized()
      }
      return null
    } catch (error) {
      return serverError(error)
    } 
  }
}