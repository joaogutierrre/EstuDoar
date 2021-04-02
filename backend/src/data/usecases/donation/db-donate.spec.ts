import { throwError } from './../../../domain/test/test-helper';
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

  test('should throw if LoadStudentByIdRepository throws', async () => {
    const { sut, loadStudentByIdRepositorySpy } = makeSut()
    jest.spyOn(loadStudentByIdRepositorySpy, 'loadById').mockImplementationOnce(throwError)
    const promise = sut.donate(mockDonateParams())
    await expect(promise).rejects.toThrow()
  });
});