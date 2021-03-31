import { ValidationSpy } from './../../../test/mock-validation';
import { mockStudentModel } from './../../../../domain/test/mock-student';
import { InvalidParamError } from './../../../errors/invalid-param-error';
import { HttpRequest } from './../../../protocols/http';
import { UpdateStudentByIdSpy } from './../../../test/mock-student';
import { UpdateStudentByIdController } from './update-student-by-id-controller';
import { serverError, forbidden, ok } from './../../../helpers/http/http-helper';
import { throwError } from './../../../../domain/test/test-helper';

const mockRequest = (): HttpRequest => ({
  accountId: 'any_id',
  body: {
    id: 'any_id',
    name: 'any_name',
    school: 'any_school',
    about: 'any_about',
    image: 'any_image',
    items: [{
      category: 'any_category',
      quantity: 1,
      donated: 0
    }, {
      category: 'other_category',
      quantity: 2,
      donated: 0
    }]
  }
})

type SutTypes = {
  sut: UpdateStudentByIdController
  updateStudentByIdSpy: UpdateStudentByIdSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const updateStudentByIdSpy = new UpdateStudentByIdSpy()
  const validationSpy = new ValidationSpy()
  const sut = new UpdateStudentByIdController(updateStudentByIdSpy, validationSpy)
  return {
    sut,
    updateStudentByIdSpy,
    validationSpy
  }
}

describe('UpdateStudentById Controller', () => {
  test('should return 500 if UpdateStudentById throws', async () => {
    const { sut, updateStudentByIdSpy } = makeSut()
    jest.spyOn(updateStudentByIdSpy, 'update').mockImplementationOnce(throwError)
    const response = await sut.handle(mockRequest())
    expect(response).toEqual(serverError(new Error()))
  });

  test('should call UpdateStudentById with correct values', async () => {
    const { sut, updateStudentByIdSpy } = makeSut()
    await sut.handle(mockRequest())
    expect(updateStudentByIdSpy.data).toEqual({
      accountId: 'any_id',
      id: 'any_id',
      name: 'any_name',
      school: 'any_school',
      about: 'any_about',
      image: 'any_image',
      items: [{
        category: 'any_category',
        quantity: 1,
        donated: 0
      }, {
        category: 'other_category',
        quantity: 2,
        donated: 0
      }]
    })
  });

  test('should returns 403 if LoadStudentsByAccount returns null', async () => {
    const { sut, updateStudentByIdSpy } = makeSut()
    jest.spyOn(updateStudentByIdSpy, 'update').mockReturnValueOnce(null)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('id')))
  });

  test('should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(mockStudentModel()))
  });

  test('should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validationSpy.data).toEqual(mockRequest().body)
  });
});