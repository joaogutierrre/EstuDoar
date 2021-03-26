import { LoadCategoryRepositorySpy } from "../../test/mock-load-category";
import { DbLoadCategory } from "./db-load-category";
import { mockCategoryModel } from './../../../domain/test/mock-category'

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
        const loadByCategorySpy = jest.spyOn(loadCategoryRepositorySpy, 'loadByCategory')
        await sut.load() 
        expect(loadByCategorySpy).toHaveBeenCalled()
    });

});