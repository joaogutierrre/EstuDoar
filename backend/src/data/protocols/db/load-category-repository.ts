import { CategoriesModel } from "../../../domain/model/category";

export interface LoadCategoryRepository {
    loadCategory: () => Promise<CategoriesModel>
}