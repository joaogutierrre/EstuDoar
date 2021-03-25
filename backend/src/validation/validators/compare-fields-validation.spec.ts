import { CompareFieldsValidation } from './compare-fields-validation';
import { InvalidParamError } from './../../presentation/errors/invalid-param-error';
type SutTypes = {
  sut: CompareFieldsValidation
}

const makeSut = (): SutTypes => {
  const sut = new CompareFieldsValidation('field', 'fieldToCompare')
  return {
    sut
  }
}

describe('RequiredField Validation', () => {
  test('should return a InvalidParamError if validation fails', () => {
    const { sut } = makeSut()
    const error = sut.validate({
      field: 'any_value',
      fieldToCompare: 'wrong_name'
    })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  });
});