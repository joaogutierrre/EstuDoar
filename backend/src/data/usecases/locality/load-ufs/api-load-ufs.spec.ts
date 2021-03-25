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
});