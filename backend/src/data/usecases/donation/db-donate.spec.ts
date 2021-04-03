import { mockStudentModel } from './../../../domain/test/mock-student';
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

  test('should call UpdateStudentById with correct values', async () => {
    const { sut, updateStudentByIdRepositorySpy } = makeSut()
    const donated = mockDonateParams()
    await sut.donate(donated)
    const student = mockStudentModel()
    student.items[0].donated = donated.items[0].donated
    student.items[1].donated = donated.items[1].donated
    expect(updateStudentByIdRepositorySpy.data).toEqual(student)
  });

  test('should throw if UpdateStudentById throws', async () => {
    const { sut, updateStudentByIdRepositorySpy } = makeSut()
    jest.spyOn(updateStudentByIdRepositorySpy, 'updateById').mockImplementationOnce(throwError)
    const promise = sut.donate(mockDonateParams())
    await expect(promise).rejects.toThrow()
  });

  test('shoulg call DonateRepository with correct values', async () => {
    const { sut, donateRepositorySpy } = makeSut()
    await sut.donate(mockDonateParams())
    expect(donateRepositorySpy.data).toEqual(mockDonateParams())
  });

  test('should throw if DonateRepository throws', async () => {
    const { sut, donateRepositorySpy } = makeSut()
    jest.spyOn(donateRepositorySpy, 'donate').mockImplementationOnce(throwError)
    const promise = sut.donate(mockDonateParams())
    await expect(promise).rejects.toThrow()
  });

  test('should return an donation model on success', async () => {
    const { sut } = makeSut()
    const donation = await sut.donate(mockDonateParams())
    expect(donation).toBeTruthy()
  });
});