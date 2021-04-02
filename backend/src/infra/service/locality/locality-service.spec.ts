import { throwError } from './../../../domain/test/test-helper';
import { LocalityService } from './locality-service';
import axios from 'axios'

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
    /*
    test('should throw if axios throws', async () => {
      const { sut } = makeSut()
      jest.spyOn(axios, 'get').mockImplementationOnce(() => {
        throw new Error()
      })
      const promise = sut.loadCitiesByUf('any_uf')
      expect(promise).rejects.toThrow()
    });

    test('should return null if axios not returns status code 200', async () => {
      const { sut } = makeSut()
      jest.spyOn(axios, 'get').mockReturnValueOnce(Promise.resolve({
        data: {
          statusCode: 404
        }
      }))
      const cities = await sut.loadCitiesByUf('any_uf')
      expect(cities).toBe(null)
    });
    */

    test('should return a list of cities if axios returns status code 200', async () => {
      const { sut } = makeSut()
      jest.spyOn(axios, 'get').mockReturnValueOnce(Promise.resolve({
        data: {
          statusCode: 200
        }
      }))
      const cities = await sut.loadCitiesByUf('any_uf')
      expect(cities).toBeTruthy()
    });

    test('should return a list of cities on success', async () => {
      const { sut } = makeSut()
      const cities = await sut.loadCitiesByUf('35')
      expect(cities).toBeTruthy()
    });
  });

  describe('loadSubdistrict', () => {
    test('should return a list of subdistricts if axios returns status code 200', async () => {
      const { sut } = makeSut() 
      jest.spyOn(axios, 'get').mockReturnValueOnce(Promise.resolve({
        data: {
          statusCode: 200
        }
      }))
      const subdistricts = await sut.loadSubdistrict('city')
      expect(subdistricts).toBeTruthy()
    })
  });
});