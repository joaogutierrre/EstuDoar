import { HttpRequest } from './../../../protocols/http';
import { serverError } from './../../../helpers/http/http-helper';
import { AddStudentController } from './add-student-controller';
import { AddStudentSpy } from './../../../test/mock-student';

const mockRequest = (): HttpRequest => ({
  body: {
    accountId: 'any_id',
    name: 'any_name',
    school: 'any_school',
    items: [{
      category: 'any_category',
      quantity: 'any_quantity'
    }]
  }
})

type SutTypes = {
  sut: AddStudentController
  addStudentSpy: AddStudentSpy
}

const makeSut = (): SutTypes => {
  const addStudentSpy = new AddStudentSpy()
  const sut = new AddStudentController(addStudentSpy)
  return {
    sut,
    addStudentSpy
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
    expect(addStudentSpy.data).toEqual(mockRequest().body)
  });
});