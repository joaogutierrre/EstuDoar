import { throwError } from './../../../../domain/test/test-helper';
import { ApiLoadUfs } from './api-load-ufs';
import { LoadUfsServiceSpy } from './../../../test/mock-locality';
import { LoadUfsService } from './../../../protocols/service/load-ufs-service';

type SutTypes = {
  sut: ApiLoadUfs
  loadUfsServiceSpy: LoadUfsServiceSpy
}

const makeSut = (): SutTypes => {
  const loadUfsServiceSpy = new LoadUfsServiceSpy()
  const sut = new ApiLoadUfs(loadUfsServiceSpy)
  return {
    sut,
    loadUfsServiceSpy
  }
}

describe('ApiLoadUfs', () => {
  test('should call LoadUfsService', async () => {
    const { sut, loadUfsServiceSpy } = makeSut()
    await sut.load()
    expect(loadUfsServiceSpy.wasCalled).toBe(true)
  });

  test('should throws if LoadUfsService throws', async () => {
    const { sut, loadUfsServiceSpy } = makeSut()
    jest.spyOn(loadUfsServiceSpy, 'loadAllUfs').mockImplementationOnce(throwError)
    const promise = sut.load()
    expect(promise).rejects.toThrow()
  });

  test('should return null if LoadUfsService returns null', async () => {
    const { sut, loadUfsServiceSpy } = makeSut()
    jest.spyOn(loadUfsServiceSpy, 'loadAllUfs').mockReturnValueOnce(null)
    const ufs = await sut.load()
    expect(ufs).toBeNull()
  });

  test('should return a list of ufs on success', async () => {
    const { sut } = makeSut()
    const ufs = await sut.load()
    expect(ufs).toEqual({
      ufs: [{
        id: 1,
        acronym: 'SP',
        name: 'São Paulo'
      }, {
        id: 2,
        acronym: 'RJ',
        name: 'Rio de Janeiro'
      }]
    })
  });
});