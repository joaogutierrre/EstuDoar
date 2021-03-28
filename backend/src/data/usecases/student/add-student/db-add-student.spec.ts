import { AddStudentRepositorySpy } from './../../../test/mock-db-student';
import { mockAddStudentParams } from './../../../../domain/test/mock-student';
import { DbAddStudent } from './db-add-student';


type SutTypes = {
  sut: DbAddStudent
  addStudentRepositorySpy: AddStudentRepositorySpy
}

const makeSut = (): SutTypes => {
  const addStudentRepositorySpy = new AddStudentRepositorySpy()
  const sut = new DbAddStudent(addStudentRepositorySpy)
  return {
    sut,
    addStudentRepositorySpy
  }
}

describe('DbAddStudent', () => {
  test('should call AddStudentRepository with correct values', async () => {
    const { sut, addStudentRepositorySpy } = makeSut()
    await sut.add(mockAddStudentParams())
    expect(addStudentRepositorySpy.data).toEqual(mockAddStudentParams())
  });
});