import { CategoriesModel } from '../../domain/model/category';
import { mockCategoryModel } from './../../domain/test/mock-category';

export class LoadCategoryRepositorySpy implements LoadCategoryRepositorySpy {
    data: string
    result: object
    async loadCategory(): Promise<CategoriesModel> {
        const fakeCategory = mockCategoryModel()
        this.result = fakeCategory
        return fakeCategory
    }
}