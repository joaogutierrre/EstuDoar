import { InvalidParamError } from './../../../errors/invalid-param-error';
import { badRequest, forbidden, noContent } from './../../../helpers/http/http-helper';
import { MissingParamError } from './../../../errors/missing-param-error';
import { ValidationSpy } from '../../../test/mock-validation';
import { HttpRequest } from '../../../protocols/http';
import { DeleteStudentByIdSpy } from '../../../test/mock-student';
import { serverError } from '../../../helpers/http/http-helper';
import { throwError } from '../../../../domain/test/test-helper';
import { DeleteStudentByIdController } from './delete-student-by-id-controller';

const mockRequest = (): HttpRequest => ({
  accountId: 'any_accountId',
  body: {
    id: 'any_id'
  }
})

type SutTypes = {
  sut: DeleteStudentByIdController
  deleteStudentByIdSpy: DeleteStudentByIdSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const deleteStudentByIdSpy = new DeleteStudentByIdSpy()
  const validationSpy = new ValidationSpy()
  const sut = new DeleteStudentByIdController(deleteStudentByIdSpy, validationSpy)
  return {
    sut,
    deleteStudentByIdSpy,
    validationSpy
  }
}

describe('DeleteStudentByIdController', () => {
  test('should return 500 if DeleteStudentById throws', async () => {
    const { sut, deleteStudentByIdSpy } = makeSut()
    jest.spyOn(deleteStudentByIdSpy, 'delete').mockImplementationOnce(throwError)
    const response = await sut.handle(mockRequest())
    expect(response).toEqual(serverError(new Error()))
  });

  test('should call DeleteStudentById with correct values', async () => {
    const { sut, deleteStudentByIdSpy } = makeSut()
    await sut.handle(mockRequest())
    expect(deleteStudentByIdSpy.accountId).toBe('any_accountId')
    expect(deleteStudentByIdSpy.id).toBe('any_id')
  });

  test('should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()
    await sut.handle(mockRequest())
    expect(validationSpy.data).toEqual(mockRequest().body)
  });

  test('should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    jest.spyOn(validationSpy, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
  });

  test('should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  });

  test('should return 403 on fails', async () => {
    const { sut, deleteStudentByIdSpy } = makeSut()
    jest.spyOn(deleteStudentByIdSpy, 'delete').mockReturnValueOnce(Promise.resolve(false))
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('id')))
  });
});