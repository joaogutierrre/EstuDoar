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
});