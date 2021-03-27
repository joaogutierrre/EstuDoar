import { HashComparerSpy, EncrypterSpy } from './../../../test/mock-criptography';
import { throwError } from './../../../../domain/test/test-helper';
import { mockAuthenticationParams } from './../../../../domain/test/mock-account';
import { LoadAccountByEmailRepositorySpy } from './../../../test/mock-db-account';
import { DbAuthentication } from "./db-authentication"

type SutTypes = {
  sut: DbAuthentication
  loadAccountByEmailRepositorySpy: LoadAccountByEmailRepositorySpy
  hashComparerSpy: HashComparerSpy
  encrypterSpy: EncrypterSpy
}

const makeSut = (): SutTypes => {
  const loadAccountByEmailRepositorySpy = new LoadAccountByEmailRepositorySpy()
  const hashComparerSpy = new HashComparerSpy()
  const encrypterSpy = new EncrypterSpy()
  const sut = new DbAuthentication(loadAccountByEmailRepositorySpy, hashComparerSpy, encrypterSpy)
  return {
    sut,
    loadAccountByEmailRepositorySpy,
    hashComparerSpy,
    encrypterSpy
  }
}

describe('DbAuthentication', () => {
  test('should call LoadAccountByEmailRepository with correct value', async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut()
    await sut.auth(mockAuthenticationParams())
    expect(loadAccountByEmailRepositorySpy.data).toEqual(mockAuthenticationParams().email)
  });

  test('should throws if LoadAccountByEmailRepository throws', async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut()
    jest.spyOn(loadAccountByEmailRepositorySpy, 'loadByEmail').mockImplementationOnce(throwError)
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow()
  });

  test('should returns null if LoadAccountByEmailRepository returns null', async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut()
    jest.spyOn(loadAccountByEmailRepositorySpy, 'loadByEmail').mockReturnValueOnce(null)
    const accessToken = await sut.auth(mockAuthenticationParams())
    expect(accessToken).toBeNull()
  });

  test('should call HashComparer with correct values', async () => {
    const { sut, hashComparerSpy } = makeSut()
    await sut.auth(mockAuthenticationParams())
    expect(hashComparerSpy.data).toBe(mockAuthenticationParams().password)
    expect(hashComparerSpy.hash).toBe('hashed_password')
  });

  test('should throws if HashComparer throws', async () => {
    const { sut, hashComparerSpy } = makeSut()
    jest.spyOn(hashComparerSpy, 'compare').mockImplementationOnce(throwError)
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow()
  });

  test('should return null if HashComparer returns false', async () => {
    const { sut, hashComparerSpy } = makeSut()
    jest.spyOn(hashComparerSpy, 'compare').mockReturnValueOnce(Promise.resolve(false))
    const accessToken = await sut.auth(mockAuthenticationParams())
    await expect(accessToken).toBeNull()
  });

  test('should call Encrypter with correct value', async () => {
    const { sut, encrypterSpy } = makeSut()
    await sut.auth(mockAuthenticationParams())
    expect(encrypterSpy.data).toBe('any_id')
  });
});