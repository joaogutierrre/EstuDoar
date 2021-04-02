import { RequiredFieldValidation } from './../../../../../validation/validators/required-field-validation';
import { ValidationComposite } from './../../../../../validation/validators/validation-composite';
import { Validation } from './../../../../../presentation/protocols/validation';

export const makeUpdateStudentByIdValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['id', 'name', 'uf', 'city', 'school', 'about']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}