import { CategoryModel } from "../../model/category";
export interface LoadCategories {
    load: () => Promise<CategoryModel[]>
}