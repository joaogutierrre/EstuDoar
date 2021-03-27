import { HttpRequest } from './../../../protocols/http';
import { LoadCitiesByUfSpy } from './../../../test/mock-locality';
import { LoadCitiesByUfController } from './load-cities-by-uf-controller';

const mockRequest = (): HttpRequest => ({
  body: {
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
    const promise = sut.handle(mockRequest())
    expect(promise).rejects.toThrow()
  });
});