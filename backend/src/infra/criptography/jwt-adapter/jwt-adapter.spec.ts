import { throwError } from './../../../domain/test/test-helper';
import { JwtAdapter } from './jwt-adapter';
import jsonwebtoken from 'jsonwebtoken'
import { access } from 'node:fs';

jest.mock('jsonwebtoken', () => ({
  async sign (): Promise<string> {
    return 'any_token'
  },

  async verify (): Promise<string> {
    return 'any_value'
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

    test('should return a token on sign success', async () => {
      const { sut } = makeSut()
      const accessToken = await sut.encrypt('any_id')
      expect(accessToken).toBe('any_token')
    });
  });

  describe('decrypt()', () => {
    test('should call verify with correct values', async () => {
      const { sut } = makeSut()
      const verifySpy = jest.spyOn(jsonwebtoken, 'verify')
      await sut.decrypt('any_token')
      expect(verifySpy).toHaveBeenCalledWith('any_token', 'secret')
    });

    test('should return a decrypted value on verify success', async () => {
      const { sut } = makeSut()
      const value = await sut.decrypt('any_token')
      expect(value).toBe('any_value')
    });
  });
});