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
});