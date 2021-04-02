import { LoadStudentByIdRepositorySpy } from './../../test/mock-db-student';
import { mockDonateParams } from './../../../domain/test/mock-donation';
import { DonateRepositorySpy } from './../../test/mock-db-donation';
import { DbDonate } from './db-donate';
import { UpdateStudentByIdRepositorySpy } from "../../test/mock-db-student"

type SutTypes = {
  sut: DbDonate
  loadStudentByIdRepositorySpy: LoadStudentByIdRepositorySpy
  updateStudentByIdRepositorySpy: UpdateStudentByIdRepositorySpy
  donateRepositorySpy: DonateRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadStudentByIdRepositorySpy = new LoadStudentByIdRepositorySpy()
  const updateStudentByIdRepositorySpy = new UpdateStudentByIdRepositorySpy()
  const donateRepositorySpy = new DonateRepositorySpy()
  const sut = new DbDonate(loadStudentByIdRepositorySpy, updateStudentByIdRepositorySpy, donateRepositorySpy)
  return {
    sut,
    loadStudentByIdRepositorySpy,
    updateStudentByIdRepositorySpy,
    donateRepositorySpy
  }
}

describe('DbDonate', () => {
  test('should call LoadStudentByIdRepository with correct value', async () => {
    const { sut, loadStudentByIdRepositorySpy } = makeSut()
    await sut.donate(mockDonateParams())
    expect(loadStudentByIdRepositorySpy.data).toEqual('any_studentId')
  });
});