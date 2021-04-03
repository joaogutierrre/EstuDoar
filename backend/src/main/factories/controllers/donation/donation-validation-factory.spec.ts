import { makeDonationValidation } from './donation-validation-factory';
import { Validation } from './../../../../presentation/protocols/validation';
import { ValidationComposite } from './../../../../validation/validators/validation-composite';
import { RequiredFieldValidation } from './../../../../validation/validators/required-field-validation';

jest.mock('../../../../validation/validators/validation-composite')

describe('DonationValidation factory', () => {
  test('should call ValidationComposite with all validations', () => {
    makeDonationValidation()
    const validations: Validation[] = []
    for (const field of ['type', 'studentId', 'items']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  });
});