import { LoadRoles } from "../../../domain/usecases/role/load-role";
import { ok, serverError } from "../../helpers/http/http-helper";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class RoleController implements Controller {
    constructor(
        private readonly loadRoles: LoadRoles,
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const role = await this.loadRoles.load()
            return ok(role)
        } catch (error) {
            return serverError(error)
        }
    }
}