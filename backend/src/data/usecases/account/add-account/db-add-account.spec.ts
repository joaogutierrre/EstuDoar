import { throwError } from './../../../../domain/test/test-helper';
import { mockAddAccountParams } from './../../../../domain/test/mock-account';
import { DbAddAccount } from './db-add-account';
import { HasherSpy } from './../../../test/mock-criptography';

type SutTypes = {
  sut: DbAddAccount
  hasherSpy: HasherSpy
}

const makeSut = (): SutTypes => {
  const hasherSpy = new HasherSpy()
  const sut = new DbAddAccount(hasherSpy)
  return {
    sut,
    hasherSpy
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
});