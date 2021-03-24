import { EmailInUseError } from './../errors/email-in-use-error';
import { ServerError } from './../errors/server-error';
import { serverError, forbidden } from './../helpers/http/http-helper';
import { HttpRequest } from './../protocols/http';
import { AddAccountSpy } from './../test/mock-account';
import { SignUpController } from './signup-controller';

const mockRequest = (): HttpRequest => ({
  body: {
    name: 'any_name',
    email: 'any_email@email.com',
    cpf: 'any_cpf',
    password: 'any_password',
    passwordConfirmation: 'any_password'
  }
})

type SutTypes = {
  sut: SignUpController
  addAccountSpy: AddAccountSpy
}

const makeSut = () => {
  const addAccountSpy = new AddAccountSpy()
  const sut = new SignUpController(addAccountSpy)
  return {
    sut,
    addAccountSpy
  }
}

describe('SignUpController', () => {
  test('should return 500 if AddAccount throws', async () => {
    const { sut, addAccountSpy } = makeSut()
    jest.spyOn(addAccountSpy, 'add').mockImplementationOnce(async () => {
      return Promise.reject(new Error())
    })
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  });

  test('should call AddAccount with correct values', async () => {
    const { sut, addAccountSpy } = makeSut()
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(addAccountSpy.data).toEqual({
      name: 'any_name',
      email: 'any_email@email.com',
      cpf: 'any_cpf',
      password: 'any_password'
    })
  });

  test('should returns 403 if AddAccount returns null', async () => {
    const { sut, addAccountSpy } = makeSut()
    jest.spyOn(addAccountSpy, 'add').mockReturnValueOnce(null)
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(forbidden(new EmailInUseError()))
  });
});