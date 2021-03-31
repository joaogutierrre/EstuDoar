import { throwError } from './../../../../domain/test/test-helper';
import { mockStudentModel } from './../../../../domain/test/mock-student';
import { UpdateStudentByIdRepositorySpy } from './../../../test/mock-db-student';
import { DbUpdateStudentById } from './db-update-student-by-id';

type SutTypes = {
  sut: DbUpdateStudentById
  updateStudentByIdRepositorySpy: UpdateStudentByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const updateStudentByIdRepositorySpy = new UpdateStudentByIdRepositorySpy()
  const sut = new DbUpdateStudentById(updateStudentByIdRepositorySpy)
  return {
    sut,
    updateStudentByIdRepositorySpy
  }
}

describe('DbUpdateStudentById', () => {
  test('should call UpdateStudentByIdRepository with correct values', async () => {
    const { sut, updateStudentByIdRepositorySpy } = makeSut()
    const updateStudentParams = mockStudentModel()
    await sut.update(updateStudentParams)
    expect(updateStudentByIdRepositorySpy.data).toEqual(updateStudentParams)
  });

  test('should throw if UpdateStudentByIdRepository throws', async () => {
    const { sut, updateStudentByIdRepositorySpy } = makeSut()
    jest.spyOn(updateStudentByIdRepositorySpy, 'updateById').mockImplementationOnce(throwError)
    const promise = sut.update(mockStudentModel())
    await expect(promise).rejects.toThrow()
  });

  test('should return an student on success', async () => {
    const { sut } = makeSut()
    const updateStudentParams = mockStudentModel()
    const student = await sut.update(updateStudentParams)
    expect(student).toEqual(updateStudentParams)
  });
});