import { mockAuthenticationParams } from './../../../../domain/test/mock-account';
import { LoadAccountByEmailRepositorySpy } from './../../../test/mock-db-account';
import { DbAuthentication } from "./db-authentication"

type SutTypes = {
  sut: DbAuthentication
  loadAccountByEmailRepositorySpy: LoadAccountByEmailRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadAccountByEmailRepositorySpy = new LoadAccountByEmailRepositorySpy()
  const sut = new DbAuthentication(loadAccountByEmailRepositorySpy)
  return {
    sut,
    loadAccountByEmailRepositorySpy
  }
}

describe('DbAuthentication', () => {
  test('should call LoadAccountByEmailRepository with correct value', async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut()
    await sut.auth(mockAuthenticationParams())
    expect(loadAccountByEmailRepositorySpy.data).toEqual(mockAuthenticationParams().email)
  });
});