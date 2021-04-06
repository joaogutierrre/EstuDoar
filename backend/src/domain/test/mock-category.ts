import { CategoriesModel } from "../model/category";

export const mockCategoryModel = (): CategoriesModel => ({
    categories: [{
        id: 'any_id',
        code: 'any_code',
        name: 'any_name'
    }, {
        id: 'other_id',
        code: 'other_code',
        name: 'other_name'
    }]
})