import { Validation } from './../../../../../presentation/protocols/validation';
import { ValidationComposite } from './../../../../../validation/validators/validation-composite';
import { RequiredFieldValidation } from './../../../../../validation/validators/required-field-validation';
import { makeDeleteStudentByIdValidation } from './delete-student-by-id-validation-factory'

jest.mock('../../../../../validation/validators/validation-composite')

describe('DeleteStudentByIdValidation factory', () => {
  test('should call ValidationComposite with all validations', () => {
    makeDeleteStudentByIdValidation()
    const validations: Validation[] = []
    for (const field of ['id']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  });
});