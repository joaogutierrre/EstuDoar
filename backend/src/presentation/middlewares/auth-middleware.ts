import { forbidden } from './../helpers/http/http-helper';
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
    const headers = httpRequest.headers
    if (headers) {
      const accessToken = headers['x-access-token']
      if (accessToken) {
        await this.loadAccountByToken.load(accessToken, this.role)
      }
    }
    return forbidden(new AccessDeniedError())
  }
}