import { throwError } from './../../../domain/test/test-helper';
import { JwtAdapter } from './jwt-adapter';
import jsonwebtoken from 'jsonwebtoken'

jest.mock('jsonwebtoken', () => ({
  async sign (): Promise<string> {
    return 'any_token'
  }
}))

type SutTypes = {
  sut: JwtAdapter
}

const makeSut = (): SutTypes => {
  const sut = new JwtAdapter('secret')
  return {
    sut
  }
}

describe('JwtAdapter', () => {
  describe('encrypt()', () => {
    test('should call sign with correct values', async () => {
      const { sut } = makeSut()
      const signSpy = jest.spyOn(jsonwebtoken, 'sign')
      await sut.encrypt('any_id')
      expect(signSpy).toHaveBeenCalledWith({ id: 'any_id' }, 'secret')
    });

    test('should throw if sign throws', async () => {
      const { sut } = makeSut()
      jest.spyOn(jsonwebtoken, 'sign').mockImplementationOnce(throwError)
      const promise = sut.encrypt('any_id')
      expect(promise).rejects.toThrow()
    });
  });
});