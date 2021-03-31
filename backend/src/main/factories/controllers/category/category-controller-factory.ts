import { CategoryController } from '../../../../presentation/controllers/category/category-controller';
import { makeDbLoadCategory } from '../../usecases/category/db-load-category-/db-load-category-factory';

export const makeCategoryController = (): CategoryController => {
    const categoryController = new CategoryController(makeDbLoadCategory())
    return categoryController
  }