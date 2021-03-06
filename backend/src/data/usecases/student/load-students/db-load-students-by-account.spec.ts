import { mockStudentModelList } from './../../../../domain/test/mock-student';
import { throwError } from './../../../../domain/test/test-helper';
import { LoadStudentsByAccountRepositorySpy } from '../../../test/mock-db-student';
import { DbLoadStudentsByAccount } from './db-load-students-by-account';

type SutTypes = {
  sut: DbLoadStudentsByAccount
  loadStudentsByAccountRepositorySpy: LoadStudentsByAccountRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadStudentsByAccountRepositorySpy = new LoadStudentsByAccountRepositorySpy()
  const sut = new DbLoadStudentsByAccount(loadStudentsByAccountRepositorySpy)
  return {
    sut,
    loadStudentsByAccountRepositorySpy
  }
}

describe('DbLoadStudents', () => {
  test('should call LoadStudentsByAccountRepository with correct value', async () => {
    const { sut, loadStudentsByAccountRepositorySpy } = makeSut()
    await sut.load('any_id')
    expect(loadStudentsByAccountRepositorySpy.data).toBe('any_id')
  });

  test('should throw if LoadStudentsByAccountRepository throws', async () => {
    const { sut, loadStudentsByAccountRepositorySpy } = makeSut()
    jest.spyOn(loadStudentsByAccountRepositorySpy, 'loadStudentsByAccount').mockImplementationOnce(throwError)
    const promise = sut.load('any_id')
    await expect(promise).rejects.toThrow()
  });

  test('should return a list of students on success', async () => {
    const { sut } = makeSut()
    const students = await sut.load('any_id')
    expect(students).toEqual(mockStudentModelList())
  });
});