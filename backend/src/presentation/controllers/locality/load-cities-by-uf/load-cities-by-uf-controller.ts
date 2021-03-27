import { ServiceUnavaibleError } from './../../../errors/service-unavaible-error';
import { ServerError } from './../../../errors/server-error';
import { ok, serverError, serviceUnavaible } from './../../../helpers/http/http-helper';
import { LoadCitiesByUf } from './../../../../domain/usecases/locality/load-cities-by-uf';
import { HttpRequest, HttpResponse } from './../../../protocols/http';
import { Controller } from './../../../protocols/controller';

export class LoadCitiesByUfController implements Controller {
  constructor (
    private readonly loadCitiesByUf: LoadCitiesByUf
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { uf } = httpRequest.body
      const cities = await this.loadCitiesByUf.load(uf)
      if (!cities) {
        return serviceUnavaible(new ServiceUnavaibleError())
      }
      return ok(cities)
    } catch (error) {
      return serverError(new ServerError(error))
    }
  }
}