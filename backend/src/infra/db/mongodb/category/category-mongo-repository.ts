import { LoadCategoryRepository } from "../../../../data/protocols/db/category/load-category-repository";
import { CategoryModel } from './../../../../domain/model/category';
import { MongoHelper } from "../helpers/mongo-helper";

export class CategoryMongoRepository implements LoadCategoryRepository {
    async loadCategory (): Promise<CategoryModel[]> {
        const categoryCollection = await MongoHelper.getCollection('categories')
        const categories = await categoryCollection.find().toArray()
        return MongoHelper.mapCollection(categories)
    }
}