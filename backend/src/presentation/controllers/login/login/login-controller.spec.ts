import { LoginController } from './login-controller';
import { ServerError } from './../../../errors/server-error';
import { serverError } from './../../../helpers/http/http-helper';
import { AuthenticationSpy } from './../../../test/mock-account';
import { HttpRequest } from './../../../protocols/http';

const mockRequest = (): HttpRequest => ({
  body: {
    email: 'any_email@email.com',
    password: 'any_password'
  }
})

type SutTypes = {
  sut: LoginController
  authenticationSpy: AuthenticationSpy
}

const makeSut = (): SutTypes => {
  const authenticationSpy = new AuthenticationSpy()
  const sut = new LoginController(authenticationSpy)
  return {
    sut,
    authenticationSpy
  }
}

describe('LoginController', () => {
  test('should return 500 if Authentication throws', async () => {
    const { sut, authenticationSpy } = makeSut()
    jest.spyOn(authenticationSpy, 'auth').mockImplementationOnce(async () => {
      return Promise.reject(new Error())
    })
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  });
});