import { ok, badRequest, serverError } from "../../helpers/http/http-helper";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { Validation } from "../../protocols/validation";
import { LoadCategories } from '../../../domain/usecases/category/load-category';

export class CategoryController implements Controller {
    constructor(
        private readonly loadCategories: LoadCategories,
        private readonly validation: Validation
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const { code, name } = httpRequest.body
            const category = await this.loadCategories.load()
            return ok(category)
        } catch (error) {
            return serverError(error)
        }
    }
}