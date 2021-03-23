import { AddAccountRepositorySpy } from './../../../test/mock-db-account';
import { throwError } from './../../../../domain/test/test-helper';
import { mockAddAccountParams, mockAccountModel } from './../../../../domain/test/mock-account';
import { DbAddAccount } from './db-add-account';
import { HasherSpy } from './../../../test/mock-criptography';

type SutTypes = {
  sut: DbAddAccount
  hasherSpy: HasherSpy
  addAccountRepositorySpy: AddAccountRepositorySpy
}

const makeSut = (): SutTypes => {
  const hasherSpy = new HasherSpy()
  const addAccountRepositorySpy = new AddAccountRepositorySpy()
  const sut = new DbAddAccount(hasherSpy, addAccountRepositorySpy)
  return {
    sut,
    hasherSpy,
    addAccountRepositorySpy
  }
}

describe('DbAddAccount', () => {
  test('should call Hasher with correct value', async () => {
    const { sut, hasherSpy } = makeSut()
    const accountData = mockAddAccountParams()
    await sut.add(accountData)
    expect(hasherSpy.value).toBe(accountData.password)
  });

  test('should throw if Hasher throws', async () => {
    const { sut, hasherSpy } = makeSut()
    jest.spyOn(hasherSpy, 'hash').mockImplementationOnce(throwError)
    const accountData = mockAddAccountParams()
    const promise = sut.add(accountData)
    await expect(promise).rejects.toThrow()
  });

  test('should call AddAccountRepository with correct values', async () => {
    const { sut, addAccountRepositorySpy } = makeSut()
    const accountData = mockAddAccountParams()
    await sut.add(accountData)
    expect(addAccountRepositorySpy.data).toEqual({
      name: 'any_name',
      email: 'any_email@email.com',
      cpf: 'any_cpf',
      password: 'hashed_password'
    })
  });

  test('should throw if AddAccountRepository throws', async () => {
    const { sut, addAccountRepositorySpy } = makeSut()
    jest.spyOn(addAccountRepositorySpy, 'add').mockImplementationOnce(throwError)
    const accountData = mockAddAccountParams()
    const promise = sut.add(accountData)
    await expect(promise).rejects.toThrow()
  });

  test('should return an account on success', async () => {
    const { sut, addAccountRepositorySpy } = makeSut()
    const accountData = mockAddAccountParams()
    const account = await sut.add(accountData)
    expect(account).toEqual(mockAccountModel())
  });
});