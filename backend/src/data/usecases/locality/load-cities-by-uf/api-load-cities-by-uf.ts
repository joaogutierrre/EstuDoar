import { LoadCitiesByUfService } from './../../../protocols/service/load-cities-by-uf-service';
import { CitiesModel } from './../../../../domain/model/locality';
import { LoadCitiesByUf } from './../../../../domain/usecases/locality/load-cities-by-uf';

export class ApiLoadCitiesByUf implements LoadCitiesByUf {
  constructor (
    private readonly loadCitiesByUfService: LoadCitiesByUfService
  ) {}

  async load (uf: string): Promise<CitiesModel> {
    await this.loadCitiesByUfService.loadCitiesByUf(uf)
    return null
  }
}