import { makeSignUpValidation } from './signup-validation-factory';
import { makeDbAddAccount } from './../../../usecases/account/add-account/db-add-account-factory';
import { SignUpController } from '../../../../../presentation/controllers/login/signup/signup-controller';

export const makeSignUpController = (): SignUpController => {
  const signUpController = new SignUpController(makeDbAddAccount(), makeSignUpValidation())
  return signUpController
}