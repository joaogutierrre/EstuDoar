import { throwError } from './../../../../domain/test/test-helper';
import { mockStudentModel } from './../../../../domain/test/mock-student';
import { UpdateStudentsByIdRepositorySpy } from './../../../test/mock-db-student';
import { DbUpdateStudentById } from './db-update-student-by-id';

type SutTypes = {
  sut: DbUpdateStudentById
  updateStudentsByIdRepositorySpy: UpdateStudentsByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const updateStudentsByIdRepositorySpy = new UpdateStudentsByIdRepositorySpy()
  const sut = new DbUpdateStudentById(updateStudentsByIdRepositorySpy)
  return {
    sut,
    updateStudentsByIdRepositorySpy
  }
}

describe('DbUpdateStudentById', () => {
  test('should call UpdateStudentByIdRepository with correct values', async () => {
    const { sut, updateStudentsByIdRepositorySpy } = makeSut()
    const updateStudentParams = mockStudentModel()
    await sut.update(updateStudentParams)
    expect(updateStudentsByIdRepositorySpy.data).toEqual(updateStudentParams)
  });

  test('should throw if UpdateStudentByIdRepository throws', async () => {
    const { sut, updateStudentsByIdRepositorySpy } = makeSut()
    jest.spyOn(updateStudentsByIdRepositorySpy, 'updateById').mockImplementationOnce(throwError)
    const promise = sut.update(mockStudentModel())
    await expect(promise).rejects.toThrow()
  });
});