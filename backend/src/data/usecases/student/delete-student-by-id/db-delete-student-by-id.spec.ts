import { DeleteStudentByIdRepositorySpy } from './../../../test/mock-db-student';
import { DbDeleteStudentById } from './db-delete-student-by-id';
type SutTypes = {
  sut: DbDeleteStudentById
  deleteStudentByIdRepositorySpy: DeleteStudentByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const deleteStudentByIdRepositorySpy = new DeleteStudentByIdRepositorySpy()
  const sut = new DbDeleteStudentById(deleteStudentByIdRepositorySpy)
  return {
    sut,
    deleteStudentByIdRepositorySpy
  }
}

describe('DbDeleteStudentById', () => {
  test('should call DeleteStudentByIdRepository with correct values', async () => {
    const { sut, deleteStudentByIdRepositorySpy } = makeSut()
    await sut.delete('any_accountId', 'any_id')
    expect(deleteStudentByIdRepositorySpy.accountId).toBe('any_accountId')
    expect(deleteStudentByIdRepositorySpy.id).toBe('any_id')
  });
});