import axios from "axios";
import { SchoolService } from "./school-service";

type SutTypes = {
    sut: SchoolService
  }
  
  const makeSut = (): SutTypes => {
    const sut = new SchoolService()
    return {
      sut
    }
  }


describe('loadSchool', () => {
    test('should return a list of schools if axios returns status code 200', async () => {
      const { sut } = makeSut()
      jest.spyOn(axios, 'get').mockReturnValueOnce(Promise.resolve({
        data: {
          statusCode: 200
        }
      }))
      const schools = await sut.loadSchools('city')
      expect(schools).toBeTruthy()
    });

    test('should return a list of schools on success', async () => {
      const { sut } = makeSut()
      const schools = await sut.loadSchools('2309')
      expect(schools).toBeTruthy()
    });
  });
