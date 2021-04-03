import { ValidationSpy } from './../../test/mock-validation';
import { mockDonationModel } from './../../../domain/test/mock-donation';
import { InvalidParamError } from './../../errors/invalid-param-error';
import { ServerError } from './../../errors/server-error';
import { serverError, forbidden, ok } from './../../helpers/http/http-helper';
import { throwError } from './../../../domain/test/test-helper';
import { HttpRequest } from './../../protocols/http';
import { DonateSpy } from './../../test/donation/mock-donation';
import { DonationController } from './donation-controller';

const mockRequest = (): HttpRequest => ({
  accountId: 'any_accountId',
  body: {
    type: 'any_type',
    studentId: 'any_studentId',
    items: [{
      category: 'any_category',
      donated: 1
    }, {
      category: 'other_category',
      donated: 2
    }]
  }
})

type SutTypes = {
  sut: DonationController
  donateSpy: DonateSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const donateSpy = new DonateSpy()
  const validationSpy = new ValidationSpy()
  const sut = new DonationController(donateSpy, validationSpy)
  return {
    sut,
    donateSpy,
    validationSpy
  }
}

describe('Donation Controller', () => {
  test('should call Donate with correct values', async () => {
    const { sut, donateSpy } = makeSut()
    await sut.handle(mockRequest())
    expect(donateSpy.data).toEqual({
      accountId: 'any_accountId',
      type: 'any_type',
      studentId: 'any_studentId',
      items: [{
        category: 'any_category',
        donated: 1
      }, {
        category: 'other_category',
        donated: 2
      }]
    })
  });

  test('should return 500 if Donate throws', async () => {
    const { sut, donateSpy } = makeSut()
    jest.spyOn(donateSpy, 'donate').mockImplementationOnce(throwError)
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

  test('should returns 403 if Donate returns null', async () => {
    const { sut, donateSpy } = makeSut()
    jest.spyOn(donateSpy, 'donate').mockReturnValueOnce(null)
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('donated')))
  });

  test('should return 200 if valid data is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(ok(mockDonationModel()))
  });

  test('should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validationSpy.data).toEqual(httpRequest.body)
  });
});