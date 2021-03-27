import { makeDbAuthentication } from './../../../usecases/account/authentication/db-authentication-factory';
import { makeLoginValidation } from './login-validation-factory';
import { LoginController } from './../../../../../presentation/controllers/login/login/login-controller';

export const makeLoginController = (): LoginController => {
  const loginController = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return loginController
}