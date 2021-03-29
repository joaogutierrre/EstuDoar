import { HttpRequest, HttpResponse } from './../protocols/http';
import { LoadAccountByToken } from './../../domain/usecases/account/load-account-by-token';
import { Middleware } from './../protocols/middleware';

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return null
  }
}