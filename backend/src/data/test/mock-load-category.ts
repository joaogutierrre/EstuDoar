import { CategoryModel } from './../../domain/model/category';
import { LoadCategoryRepository } from './../protocols/db/load-category-repository';
import { CategoriesModel } from '../../domain/model/category';
import { mockCategoryModel } from './../../domain/test/mock-category';

export class LoadCategoryRepositorySpy implements LoadCategoryRepository {
    data: string
    result: object
    async loadCategory(): Promise<CategoryModel[]> {
        const fakeCategory = [{
            id: 'any_id',
            code: 'any_code',
            name: 'any_name'
        }, {
            id: 'other_id',
            code: 'other_code',
            name: 'other_name'
        }]
        this.result = fakeCategory
        return fakeCategory
    }
}