import { forbidden, ok, serverError } from './../helpers/http/http-helper';
import { AccessDeniedError } from './../errors/access-email-error';
import { HttpRequest, HttpResponse } from './../protocols/http';
import { LoadAccountByToken } from './../../domain/usecases/account/load-account-by-token';
import { Middleware } from './../protocols/middleware';

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly role?: string
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const headers = httpRequest.headers
      if (headers) {
        const accessToken = headers['x-access-token']
        if (accessToken) {
          const account = await this.loadAccountByToken.load(accessToken, this.role)
          if (account) {
            return ok({ accountId: account.id })
          }
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}