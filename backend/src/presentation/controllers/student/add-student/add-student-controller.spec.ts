import { mockStudentModel } from './../../../../domain/test/mock-student';
import { MissingParamError } from './../../../errors/missing-param-error';
import { ValidationSpy } from './../../../test/mock-validation';
import { HttpRequest } from './../../../protocols/http';
import { serverError, badRequest, ok } from './../../../helpers/http/http-helper';
import { AddStudentController } from './add-student-controller';
import { AddStudentSpy } from './../../../test/mock-student';

const mockRequest = (): HttpRequest => ({
  accountId: 'any_id',
  body: {
    name: 'any_name',
    school: 'any_school',
    about: 'any_about',
    image: 'any_image',
    items: [{
      category: 'any_category',
      quantity: 1,
      donated: 0
    }]
  }
})

type SutTypes = {
  sut: AddStudentController
  addStudentSpy: AddStudentSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const addStudentSpy = new AddStudentSpy()
  const validationSpy = new ValidationSpy()
  const sut = new AddStudentController(addStudentSpy, validationSpy)
  return {
    sut,
    addStudentSpy,
    validationSpy
  }
}

describe('AddStudentController', () => {
  test('should return 500 if AddStudent throws', async () => {
    const { sut, addStudentSpy } = makeSut()
    jest.spyOn(addStudentSpy, 'add').mockImplementationOnce(async () => {
      return Promise.reject(new Error())
    })
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new Error()))
  });

  test('should call AddStudent with correct values', async () => {
    const { sut, addStudentSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(addStudentSpy.data).toEqual({
      accountId: 'any_id',
      name: 'any_name',
      school: 'any_school',
      about: 'any_about',
      image: 'any_image',
      items: [{
        category: 'any_category',
        quantity: 1,
        donated: 0
      }]
    })
  });

  test('should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validationSpy.data).toEqual(mockRequest().body)
  });

  test('should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    jest.spyOn(validationSpy, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
  });

  test('should return 200 if valid data is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(ok(mockStudentModel()))
  });
});