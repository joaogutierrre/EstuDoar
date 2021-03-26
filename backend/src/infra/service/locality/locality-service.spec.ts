import { throwError } from './../../../domain/test/test-helper';
import { LocalityService } from './locality-service';
import axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: LocalityService
}

const makeSut = (): SutTypes => {
  const sut = new LocalityService()
  return {
    sut
  }
}

describe('LocalityService', () => {
  describe('loadCitiesByUf()', () => {
    test('should throw if axios throws', async () => {
      const { sut } = makeSut()
      jest.spyOn(axios, 'get').mockImplementationOnce(() => {
        throw new Error()
      })
      const promise = sut.loadCitiesByUf('any_uf')
      expect(promise).rejects.toThrow()
    });
  });
});