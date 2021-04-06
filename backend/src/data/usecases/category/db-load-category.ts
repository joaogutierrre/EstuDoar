import { CategoriesModel } from '../../../domain/model/category';
import { LoadCategories } from '../../../domain/usecases/category/load-category';
import { LoadCategoryRepository } from '../../protocols/db/category/load-category-repository';

export class DbLoadCategory implements LoadCategories {

    constructor(
        private readonly loadCategoryRepository: LoadCategoryRepository
    ) { }

    async load(): Promise<CategoriesModel> {
        const categories = await this.loadCategoryRepository.loadCategory()
        if (categories) {
            return { categories }
        }
        return null
    }

}