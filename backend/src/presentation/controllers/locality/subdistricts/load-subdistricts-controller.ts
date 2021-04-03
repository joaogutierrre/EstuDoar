import { LoadSubdistricts } from "../../../../domain/usecases/subdistricts/load-subdistricts"
import { ServerError } from "../../../errors/server-error"
import { ServiceUnavaibleError } from "../../../errors/service-unavaible-error"
import { ok, serverError, serviceUnavaible } from "../../../helpers/http/http-helper"
import { Controller } from "../../../protocols/controller"
import { HttpRequest, HttpResponse } from "../../../protocols/http"

export class LoadSubdistrictsController implements Controller {
    constructor (
      private readonly loadSubdistricts: LoadSubdistricts
    ) {}
  
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
      try {
        const { city } = httpRequest.params
        const subdistricts = await this.loadSubdistricts.load(city)
        if (!subdistricts) {
          return serviceUnavaible(new ServiceUnavaibleError())
        }
        return ok(subdistricts)
      } catch (error) {
        return serverError(new ServerError(error))
      }
    }
  }