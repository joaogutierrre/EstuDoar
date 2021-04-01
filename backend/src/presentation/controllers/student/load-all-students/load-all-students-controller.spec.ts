import { mockStudentModelList } from './../../../../domain/test/mock-student';
import { serverError, ok, noContent } from './../../../helpers/http/http-helper';
import { throwError } from './../../../../domain/test/test-helper';
import { LoadAllStudentsSpy } from './../../../test/mock-student';
import { LoadAllStudentsController } from './load-all-students-controller';
import { HttpRequest } from './../../../protocols/http';

const mockRequest = (): HttpRequest => ({
  params: {
    uf: 'any_uf',
    city: 'any_city',
    subDistrict: 'any_subDistrict',
    school: 'any_school'
  }
})

type SutTypes = {
  sut: LoadAllStudentsController
  loadAllStudentsSpy: LoadAllStudentsSpy
}

const makeSut = (): SutTypes => {
  const loadAllStudentsSpy = new LoadAllStudentsSpy()
  const sut = new LoadAllStudentsController(loadAllStudentsSpy)
  return {
    sut, 
    loadAllStudentsSpy
  }
}

describe('LoadAllStudents Controller', () => {
  test('should return 500 if LoadAllStudents throws', async () => {
    const { sut, loadAllStudentsSpy } = makeSut()
    jest.spyOn(loadAllStudentsSpy, 'load').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  });

  test('should call LoadAllStudents with correct values', async () => {
    const { sut, loadAllStudentsSpy } = makeSut()
    await sut.handle(mockRequest())
    expect(loadAllStudentsSpy.data).toEqual(mockRequest().params)
  });

  test('should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(mockStudentModelList()))
  });

  test('should return 204 if LoadAllStudents returns an empyt list', async () => {
    const { sut, loadAllStudentsSpy } = makeSut()
    jest.spyOn(loadAllStudentsSpy, 'load').mockReturnValueOnce(Promise.resolve([]))
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  });
});