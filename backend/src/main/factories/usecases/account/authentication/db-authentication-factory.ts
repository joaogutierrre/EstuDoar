import { JwtAdapter } from './../../../../../infra/criptography/jwt-adapter/jwt-adapter';
import { BcryptAdapter } from './../../../../../infra/criptography/bcrypt-adapter/bcrypt-adapter';
import { AccountMongoRepository } from './../../../../../infra/db/mongodb/account/account-mongo-repository';
import { DbAuthentication } from "../../../../../data/usecases/account/authentication/db-authentication";
import env from '../../../../config/env';

export const makeDbAuthentication = (): DbAuthentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository)
}