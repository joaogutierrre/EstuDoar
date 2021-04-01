import { LoadAllStudentsRepositorySpy } from './../../../test/mock-db-student';
import { DbLoadAllStudents } from './db-load-all-students';
import { mockLoadAllStudentsParams } from './../../../../domain/test/mock-student';
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
});