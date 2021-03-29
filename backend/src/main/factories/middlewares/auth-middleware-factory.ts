import { makeDbLoadAccountByToken } from './../usecases/account/load-account-by-token/load-account-by-token-factory';
import { AuthMiddleware } from './../../../presentation/middlewares/auth-middleware';
import { Middleware } from './../../../presentation/protocols/middleware';

export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}