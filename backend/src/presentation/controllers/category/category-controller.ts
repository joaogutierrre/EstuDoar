import { ok, serverError } from "../../helpers/http/http-helper";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { LoadCategories } from '../../../domain/usecases/category/load-category';

export class CategoryController implements Controller {
    constructor(
        private readonly loadCategories: LoadCategories,
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const category = await this.loadCategories.load()
            return ok(category)
        } catch (error) {
            return serverError(error)
        }
    }
}