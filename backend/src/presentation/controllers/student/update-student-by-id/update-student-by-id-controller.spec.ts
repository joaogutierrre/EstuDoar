import { HttpRequest } from './../../../protocols/http';
import { UpdateStudentByIdSpy } from './../../../test/mock-student';
import { UpdateStudentByIdController } from './update-student-by-id-controller';
import { serverError } from './../../../helpers/http/http-helper';
import { throwError } from './../../../../domain/test/test-helper';

const mockRequest = (): HttpRequest => ({
  accountId: 'any_id',
  body: {
    id: 'any_id',
    name: 'any_name',
    school: 'any_school',
    about: 'any_about',
    image: 'any_image',
    items: [{
      category: 'any_category',
      quantity: 1,
      donated: 0
    }, {
      category: 'other_category',
      quantity: 2,
      donated: 0
    }]
  }
})

type SutTypes = {
  sut: UpdateStudentByIdController
  updateStudentByIdSpy: UpdateStudentByIdSpy
}

const makeSut = (): SutTypes => {
  const updateStudentByIdSpy = new UpdateStudentByIdSpy()
  const sut = new UpdateStudentByIdController(updateStudentByIdSpy)
  return {
    sut,
    updateStudentByIdSpy
  }
}

describe('UpdateStudentById Controller', () => {
  test('should return 500 if UpdateStudentById throws', async () => {
    const { sut, updateStudentByIdSpy } = makeSut()
    jest.spyOn(updateStudentByIdSpy, 'update').mockImplementationOnce(throwError)
    const response = await sut.handle(mockRequest())
    expect(response).toEqual(serverError(new Error()))
  });

  test('should call UpdateStudentById with correct value', async () => {
    const { sut, updateStudentByIdSpy } = makeSut()
    await sut.handle(mockRequest())
    expect(updateStudentByIdSpy.data).toEqual({
      accountId: 'any_id',
      id: 'any_id',
      name: 'any_name',
      school: 'any_school',
      about: 'any_about',
      image: 'any_image',
      items: [{
        category: 'any_category',
        quantity: 1,
        donated: 0
      }, {
        category: 'other_category',
        quantity: 2,
        donated: 0
      }]
    })
  });
});