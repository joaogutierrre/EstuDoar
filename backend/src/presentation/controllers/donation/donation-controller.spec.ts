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
}

const makeSut = (): SutTypes => {
  const donateSpy = new DonateSpy()
  const sut = new DonationController(donateSpy)
  return {
    sut,
    donateSpy
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
});