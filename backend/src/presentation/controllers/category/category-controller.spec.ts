import { HttpRequest } from "../../protocols/http";
import { ValidationSpy } from "../../test/mock-validation";
import { CategoryController } from "./category-controller";
import { LoadCategoriesSpy } from '../../test/category/mock-category';

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
