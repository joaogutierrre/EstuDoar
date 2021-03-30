import { mockStudentModelList } from './../../../../domain/test/mock-student';
import { InvalidParamError } from './../../../errors/invalid-param-error';
import { serverError, forbidden, ok, noContent } from './../../../helpers/http/http-helper';
import { LoadStudentsByAccountSpy } from './../../../test/mock-student';
import { LoadStudentsByAccountController } from './load-students-by-account-controller';
import { HttpRequest } from './../../../protocols/http';
import { throwError } from './../../../../domain/test/test-helper';

const mockRequest = (): HttpRequest => ({
  accountId: 'any_id'
})

type SutTypes = {
  sut: LoadStudentsByAccountController
  loadStudentsByAccountSpy: LoadStudentsByAccountSpy
}

const makeSut = (): SutTypes => {
  const loadStudentsByAccountSpy = new LoadStudentsByAccountSpy()
  const sut = new LoadStudentsByAccountController(loadStudentsByAccountSpy)
  return {
    sut, 
    loadStudentsByAccountSpy
  }
}

describe('LoadStudentsByAccount Controller', () => {
  test('should return 500 if LoadStudentsByAccount throws', async () => {
    const { sut, loadStudentsByAccountSpy } = makeSut()
    jest.spyOn(loadStudentsByAccountSpy, 'load').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  });

  test('should call LoadStudentsByAccount with correct value', async () => {
    const { sut, loadStudentsByAccountSpy } = makeSut()
    await sut.handle(mockRequest())
    expect(loadStudentsByAccountSpy.data).toBe(mockRequest().accountId)
  });

  test('should returns 403 if LoadStudentsByAccount returns null', async () => {
    const { sut, loadStudentsByAccountSpy } = makeSut()
    jest.spyOn(loadStudentsByAccountSpy, 'load').mockReturnValueOnce(null)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('accountId')))
  });

  test('should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(mockStudentModelList()))
  });

  test('should return 204 if LoadStudentsByAccount returns an empyt list', async () => {
    const { sut, loadStudentsByAccountSpy } = makeSut()
    jest.spyOn(loadStudentsByAccountSpy, 'load').mockReturnValueOnce(Promise.resolve([]))
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  });
});