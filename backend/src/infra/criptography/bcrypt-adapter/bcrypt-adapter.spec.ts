import { throwError } from './../../../domain/test/test-helper';
import { BcryptAdapter } from './bcrypt-adapter';
import bcrypt from 'bcrypt'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return Promise.resolve('hash')
  },

  async compare (): Promise<boolean> {
    return Promise.resolve(true)
  }
}))

type SutTypes = {
  sut: BcryptAdapter
}

const salt = 12
const makeSut = (): SutTypes => {
  const sut = new BcryptAdapter(salt)
  return {
    sut
  }
}

describe('BcryptAdapter', () => {
  describe('hash()', () => {
    test('should call hash with correct values', async () => {
      const { sut } = makeSut()
      const hashSpy = jest.spyOn(bcrypt, 'hash')
      await sut.hash('any_value')
      expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
    });

    test('should throw if hash throws', async () => {
      const { sut } = makeSut()
      jest.spyOn(bcrypt, 'hash').mockImplementationOnce(throwError)
      const promise = sut.hash('any_value')
      expect(promise).rejects.toThrow()
    });

    test('should return a valid hash on hash success', async () => {
      const { sut } = makeSut()
      const hash = await sut.hash('any_value')
      expect(hash).toBe('hash')
    });
  });
});