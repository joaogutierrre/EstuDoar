import { HttpRequest } from './../../../protocols/http';
import { DeleteStudentByIdSpy } from './../../../test/mock-student';
import { serverError } from './../../../helpers/http/http-helper';
import { throwError } from './../../../../domain/test/test-helper';
import { DeleteStudentByIdController } from './delete-student-by-id';

const mockRequest = (): HttpRequest => ({
  accountId: 'any_accountId',
  body: {
    id: 'any_id'
  }
})

type SutTypes = {
  sut: DeleteStudentByIdController
  deleteStudentByIdSpy: DeleteStudentByIdSpy
}

const makeSut = (): SutTypes => {
  const deleteStudentByIdSpy = new DeleteStudentByIdSpy()
  const sut = new DeleteStudentByIdController(deleteStudentByIdSpy)
  return {
    sut,
    deleteStudentByIdSpy
  }
}

describe('DeleteStudentByIdController', () => {
  test('should return 500 if DeleteStudentById throws', async () => {
    const { sut, deleteStudentByIdSpy } = makeSut()
    jest.spyOn(deleteStudentByIdSpy, 'delete').mockImplementationOnce(throwError)
    const response = await sut.handle(mockRequest())
    expect(response).toEqual(serverError(new Error()))
  });
});