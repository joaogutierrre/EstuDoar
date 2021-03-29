import { serverError } from './../../../helpers/http/http-helper';
import { LoadStudentsByAccountSpy } from './../../../test/mock-student';
import { LoadStudentsByAccountController } from './load-students-by-account-controller';
import { HttpRequest } from './../../../protocols/http';
import { throwError } from './../../../../domain/test/test-helper';

const mockRequest = (): HttpRequest => ({
  body: {
    accountId: 'any_id'
  }
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
    expect(loadStudentsByAccountSpy.data).toBe(mockRequest().body.accountId)
  });
});