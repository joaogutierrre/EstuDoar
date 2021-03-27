import { LoadCategoryRepositorySpy } from "../../test/mock-load-category";
import { DbLoadCategory } from "./db-load-category";
import {throwError} from './../../../domain/test/test-helper';

type SutTypes = {
    sut: DbLoadCategory
    loadCategoryRepositorySpy: LoadCategoryRepositorySpy
}

const makeSut = (): SutTypes => {
    const loadCategoryRepositorySpy = new LoadCategoryRepositorySpy()
    const sut = new DbLoadCategory(loadCategoryRepositorySpy)
    return {
        sut,
        loadCategoryRepositorySpy
    }
}

describe('DbLoadCategory', () => {
    test('should call LoadCategoryRepository', async () => {
        const { sut, loadCategoryRepositorySpy } = makeSut()
        const loadCategorySpy = jest.spyOn(loadCategoryRepositorySpy, 'loadCategory')
        await sut.load()
        expect(loadCategorySpy).toHaveBeenCalled()
    });

    test('should throw if LoadCategoryRepository throws', async () => {
        const { sut, loadCategoryRepositorySpy } = makeSut()
        jest.spyOn(loadCategoryRepositorySpy, 'loadCategory').mockImplementationOnce(throwError)
        const promise = sut.load()
        await expect(promise).rejects.toThrow()
    });
});