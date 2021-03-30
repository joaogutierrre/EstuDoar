import { EmailValidator } from './../../../../../validation/protocols/email-validator';
import { Validation } from './../../../../../presentation/protocols/validation';
import { EmailValidation } from './../../../../../validation/validators/email-validation';
import { CompareFieldsValidation } from './../../../../../validation/validators/compare-fields-validation';
import { ValidationComposite } from './../../../../../validation/validators/validation-composite';
import { RequiredFieldValidation } from './../../../../../validation/validators/required-field-validation';
import { makeSignUpValidation } from './signup-validation-factory';

jest.mock('../../../../../validation/validators/validation-composite')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

describe('SignUpValidation factory', () => {
  test('should call ValidationComposite with all validations', () => {
    makeSignUpValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'cpf', 'role', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
    validations.push(new EmailValidation('email', makeEmailValidator()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  });
});