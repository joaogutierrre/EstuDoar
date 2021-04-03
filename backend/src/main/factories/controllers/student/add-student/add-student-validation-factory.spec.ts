import { Validation } from './../../../../../presentation/protocols/validation';
import { ValidationComposite } from './../../../../../validation/validators/validation-composite';
import { RequiredFieldValidation } from './../../../../../validation/validators/required-field-validation';
import { makeAddStudentValidation } from './add-student-validation-factory';

jest.mock('../../../../../validation/validators/validation-composite')

describe('AddStudentValidation factory', () => {
  test('should call ValidationComposite with all validations', () => {
    makeAddStudentValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'age', 'uf', 'city', 'school', 'about']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  });
});