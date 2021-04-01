import { throwError } from './../../../../domain/test/test-helper';
import { LoadAllStudentsRepositorySpy } from './../../../test/mock-db-student';
import { DbLoadAllStudents } from './db-load-all-students';
import { mockLoadAllStudentsParams, mockStudentModelList } from './../../../../domain/test/mock-student';
type SutTypes = {
  sut: DbLoadAllStudents
  loadAllStudentsRepositorySpy: LoadAllStudentsRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadAllStudentsRepositorySpy = new LoadAllStudentsRepositorySpy()
  const sut = new DbLoadAllStudents(loadAllStudentsRepositorySpy)
  return {
    sut,
    loadAllStudentsRepositorySpy
  }
}

describe('DbLoadAllStudents', () => {
  test('should call LoadAllStudentsRepository with correct values', async () => {
    const { sut, loadAllStudentsRepositorySpy } = makeSut()
    const loadAllStudentsParams = mockLoadAllStudentsParams()
    await sut.load(loadAllStudentsParams)
    expect(loadAllStudentsRepositorySpy.data).toEqual(loadAllStudentsParams)
  });

  test('should throw if LoadAllStudentsRepository throws', async () => {
    const { sut, loadAllStudentsRepositorySpy } = makeSut()
    jest.spyOn(loadAllStudentsRepositorySpy, 'loadAllStudents').mockImplementationOnce(throwError)
    const promise = sut.load(mockLoadAllStudentsParams())
    await expect(promise).rejects.toThrow()
  });

  test('should return a list of students on success', async () => {
    const { sut } = makeSut()
    const students = await sut.load(mockLoadAllStudentsParams())
    expect(students).toEqual(mockStudentModelList())
  });
});