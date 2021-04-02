import { throwError } from './../../../../domain/test/test-helper';
import { LoadStudentByIdRepositorySpy } from './../../../test/mock-db-student';
import { DbLoadStudentById } from './db-load-student-by-id';
type SutTypes = {
  sut: DbLoadStudentById
  loadStudentByIdRepositorySpy: LoadStudentByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadStudentByIdRepositorySpy = new LoadStudentByIdRepositorySpy()
  const sut = new DbLoadStudentById(loadStudentByIdRepositorySpy)
  return {
    sut,
    loadStudentByIdRepositorySpy
  }
}

describe('DbLoadStudentById', () => {
  test('should call LoadStudentByIdRepository with correct value', async () => {
    const { sut, loadStudentByIdRepositorySpy } = makeSut()
    await sut.load('any_id')
    expect(loadStudentByIdRepositorySpy.data).toBe('any_id')
  });

  test('should throw if LoadStudentByIdRepository throws', async () => {
    const { sut, loadStudentByIdRepositorySpy } = makeSut()
    jest.spyOn(loadStudentByIdRepositorySpy, 'loadById').mockImplementationOnce(throwError)
    const promise = sut.load('any_id')
    await expect(promise).rejects.toThrow()
  });
});