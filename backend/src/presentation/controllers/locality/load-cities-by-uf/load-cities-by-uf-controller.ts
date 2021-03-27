import { LoadCitiesByUf } from './../../../../domain/usecases/locality/load-cities-by-uf';
import { HttpRequest, HttpResponse } from './../../../protocols/http';
import { Controller } from './../../../protocols/controller';

export class LoadCitiesByUfController implements Controller {
  constructor (
    private readonly LoadCitiesByUf: LoadCitiesByUf
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return null
  }
}