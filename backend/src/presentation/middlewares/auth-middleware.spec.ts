import { LoadAccountByTokenSpy } from './../test/mock-account';
import { AccessDeniedError } from './../errors/access-email-error';
import { forbidden } from './../helpers/http/http-helper';
import { HttpRequest } from './../protocols/http';
import { AuthMiddleware } from './auth-middleware';

const mockRequest = (): HttpRequest => ({
  headers: {
    'x-access-token': 'any_token'
  }
})

type SutTypes = {
  sut: AuthMiddleware
  loadAccountByTokenSpy: LoadAccountByTokenSpy
}

const makeSut = (role?: string): SutTypes => {
  const loadAccountByTokenSpy = new LoadAccountByTokenSpy()
  const sut = new AuthMiddleware(loadAccountByTokenSpy, role)
  return {
    sut,
    loadAccountByTokenSpy
  }
}

describe('AuthMiddleware', () => {
  test('should return 403 if no x-access-token exists in headers', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  });

  test('should call LoadAccountByToken with correct accessToken', async () => {
    const role = "any_role"
    const { sut, loadAccountByTokenSpy } = makeSut(role)
    await sut.handle(mockRequest())
    expect(loadAccountByTokenSpy.accessToken).toBe('any_token')
    expect(loadAccountByTokenSpy.role).toBe(role)
  });
});