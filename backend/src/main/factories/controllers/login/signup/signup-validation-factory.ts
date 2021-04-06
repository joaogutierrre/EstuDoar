import { CompareFieldsValidation } from './../../../../../validation/validators/compare-fields-validation';
import { EmailValidation } from './../../../../../validation/validators/email-validation';
import { RequiredFieldValidation } from './../../../../../validation/validators/required-field-validation';
import { EmailValidatorAdapter } from './../../../../../infra/validators/email-validator-adapter';
import { ValidationComposite } from './../../../../../validation/validators/validation-composite';
import { Validation } from './../../../../../presentation/protocols/validation';

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'cpf', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}