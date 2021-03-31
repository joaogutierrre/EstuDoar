import { CategoryModel } from "../../../../domain/model/category";

export interface LoadCategoryRepository {
    loadCategory: () => Promise<CategoryModel[]>
}