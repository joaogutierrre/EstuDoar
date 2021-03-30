import { DbLoadCategory } from '../../../../../data/usecases/category/db-load-category';
import { CategoryMongoRepository } from '../../../../../infra/db/mongodb/category/category-mongo-repository';
import { LoadCategories } from './../../../../../domain/usecases/category/load-category';

export const makeDbLoadCategory = (): LoadCategories => {
    const categoryMongoRepository = new CategoryMongoRepository()
    return new DbLoadCategory(categoryMongoRepository)
}