import { CategoriesModel } from './../../model/category';

export interface LoadCategories {
    load: () => Promise<CategoriesModel>
}