import { mockLoadUfs } from './../../domain/test/mock-locality';
import { LoadUfsSpy } from './../test/mock-locality';
import { ServerError } from './../errors/server-error';
import { serverError, forbidden, ok } from './../helpers/http/http-helper';
import { LoadUfsController } from './load-ufs-controller';

type SutTypes = {
  sut: LoadUfsController
  loadUfsSpy: LoadUfsSpy
}

const makeSut = (): SutTypes => {
  const loadUfsSpy = new LoadUfsSpy()
  const sut = new LoadUfsController(loadUfsSpy)
  return {
    sut,
    loadUfsSpy
  }
}

describe('LoadUfsController', () => {
  test('should return 500 if LoadUfs throws', async () => {
    const { sut, loadUfsSpy } = makeSut()
    jest.spyOn(loadUfsSpy, 'load').mockImplementationOnce(async () => {
      return Promise.reject(new Error())
    })
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  });

  test('should call LoadUfs', async () => {
    const { sut, loadUfsSpy } = makeSut()
    await sut.handle({})
    expect(loadUfsSpy.wasCalled).toBe(true)
  });

  test('should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(ok(mockLoadUfs()))
  });
});