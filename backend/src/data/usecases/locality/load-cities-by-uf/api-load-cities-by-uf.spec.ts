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
    const ufValue = 'uf'
    await sut.load(ufValue)
    expect(loadCitiesByUfServiceSpy.data).toBe(ufValue)
  });
});