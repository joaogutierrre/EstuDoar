import { makeUpdateStudentByIdValidation } from './update-student-by-id-validation-factory';
import { Validation } from './../../../../../presentation/protocols/validation';
import { ValidationComposite } from './../../../../../validation/validators/validation-composite';
import { RequiredFieldValidation } from './../../../../../validation/validators/required-field-validation';

jest.mock('../../../../../validation/validators/validation-composite')

describe('UpdateStudentByIdValidation factory', () => {
  test('should call ValidationComposite with all validations', () => {
    makeUpdateStudentByIdValidation()
    const validations: Validation[] = []
    for (const field of ['id', 'name', 'age', 'uf', 'city', 'school', 'about']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  });
});