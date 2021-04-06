import { RequiredFieldValidation } from './../../../../validation/validators/required-field-validation';
import { ValidationComposite } from './../../../../validation/validators/validation-composite';
import { Validation } from './../../../../presentation/protocols/validation';

export const makeDonationValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['type', 'studentId', 'items']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}