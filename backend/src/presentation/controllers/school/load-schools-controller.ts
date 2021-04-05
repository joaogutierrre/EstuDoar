import { LoadSchoolService } from "../../../data/protocols/service/load-school-service";
import { LoadSchools } from "../../../domain/usecases/school/load-schools";
import { ServerError } from "../../errors/server-error";
import { ServiceUnavaibleError } from "../../errors/service-unavaible-error";
import { ok, serverError, serviceUnavaible } from "../../helpers/http/http-helper";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class LoadSchoolsController implements Controller {
    constructor(
        private readonly loadSchools: LoadSchools
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { city } = httpRequest.params
            const schools = await this.loadSchools.load(city)
            if(!schools){
                return serviceUnavaible(new ServiceUnavaibleError())
            }
            return ok(schools)
        } catch(error){
            return serverError(new ServerError(error))
        }
    }
}