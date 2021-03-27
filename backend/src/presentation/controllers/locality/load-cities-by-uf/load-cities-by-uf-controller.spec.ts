import { ServiceUnavaibleError } from './../../../errors/service-unavaible-error';
import { ServerError } from './../../../errors/server-error';
import { mockCitiesModel } from './../../../../domain/test/mock-locality';
import { ok, serverError, serviceUnavaible } from './../../../helpers/http/http-helper';
import { HttpRequest } from './../../../protocols/http';
import { LoadCitiesByUfSpy } from './../../../test/mock-locality';
import { LoadCitiesByUfController } from './load-cities-by-uf-controller';

const mockRequest = (): HttpRequest => ({
  params: {
    uf: 'any_uf'
  }
})

type SutTypes = {
  sut: LoadCitiesByUfController
  loadCitiesByUfSpy: LoadCitiesByUfSpy
}

const makeSut = (): SutTypes => {
  const loadCitiesByUfSpy = new LoadCitiesByUfSpy()
  const sut = new LoadCitiesByUfController(loadCitiesByUfSpy)
  return {
    sut,
    loadCitiesByUfSpy
  }
}

describe('LoadCitiesByUf Controller', () => {
  test('should return 500 if LoadCitiesByUf throws', async () => {
    const { sut, loadCitiesByUfSpy } = makeSut()
    jest.spyOn(loadCitiesByUfSpy, 'load').mockImplementationOnce(() => {
      return Promise.reject(new Error())
    })
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  });

  test('should call LoadCitiesByUf with correct value', async () => {
    const { sut, loadCitiesByUfSpy } = makeSut()
    await sut.handle(mockRequest())
    expect(loadCitiesByUfSpy.data).toBe('any_uf')
  });

  test('should return 503 if LoadCitiesByUf returns null', async () => {
    const { sut, loadCitiesByUfSpy } = makeSut()
    jest.spyOn(loadCitiesByUfSpy, 'load').mockReturnValueOnce(null)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serviceUnavaible(new ServiceUnavaibleError()))
  });

  test('should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(mockCitiesModel()))
  });
});