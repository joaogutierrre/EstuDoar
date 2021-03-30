import { HttpRequest } from "../../protocols/http";
import { ValidationSpy } from "../../test/mock-validation";
import { CategoryController } from "./category-controller";
import { LoadCategoriesSpy } from '../../test/category/mock-category';
import { ServerError } from "../../errors/server-error";
import { serverError, forbidden, ok, badRequest } from '../../helpers/http/http-helper';
import { mockCategoryModel } from './../../../domain/test/mock-category'

const mockRequest = (): HttpRequest => ({
    body: {
        code: 'any_code',
        name: 'any_name'
    }
})

type SutTypes = {
    sut: CategoryController
    loadCategoriesSpy: LoadCategoriesSpy
    validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
    const validationSpy = new ValidationSpy
    const loadCategoriesSpy = new LoadCategoriesSpy()
    const sut = new CategoryController(loadCategoriesSpy, validationSpy)
    return {
        sut,
        loadCategoriesSpy,
        validationSpy,
    }
}

describe('CategoryController', () => {
    test('should return 500 if LoadCategory throws', async () => {
        const { sut, loadCategoriesSpy } = makeSut()
        jest.spyOn(loadCategoriesSpy, 'load').mockImplementationOnce(async () => {
            return Promise.reject(new Error())
        })
        const httpRequest = mockRequest()
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse).toEqual(serverError(new ServerError(null)))
    })

    test('should return 200 if valid data is provided', async () => {
        const { sut } = makeSut()
        const httpRequest = mockRequest()
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse).toEqual(ok(mockCategoryModel()))
    });
})