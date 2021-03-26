import { throwError } from './../../../../domain/test/test-helper';
import { LoadCitiesByUfService } from './../../../protocols/service/load-cities-by-uf-service';
import { ApiLoadCitiesByUf } from './api-load-cities-by-uf';
import { LoadCitiesByUfServiceSpy } from './../../../test/mock-locality';

type SutTypes = {
  sut: ApiLoadCitiesByUf
  loadCitiesByUfServiceSpy: LoadCitiesByUfServiceSpy
}

const makeSut = (): SutTypes => {
  const loadCitiesByUfServiceSpy = new LoadCitiesByUfServiceSpy()
  const sut = new ApiLoadCitiesByUf(loadCitiesByUfServiceSpy)
  return {
    sut,
    loadCitiesByUfServiceSpy
  }
}

describe('ApiLoadCitiesByUf', () => {
  test('should call LoadCitiesByUfService with correct value', async () => {
    const { sut, loadCitiesByUfServiceSpy } = makeSut()
    const ufValue = 'any_uf'
    await sut.load(ufValue)
    expect(loadCitiesByUfServiceSpy.data).toBe(ufValue)
  });

  test('should throw if LoadCitiesByUfService throws', () => {
    const { sut, loadCitiesByUfServiceSpy } = makeSut()
    jest.spyOn(loadCitiesByUfServiceSpy, 'loadCitiesByUf').mockImplementationOnce(throwError)
    const promise = sut.load('any_uf')
    expect(promise).rejects.toThrow()
  });
});