import { CitiesModel } from './../../../domain/model/locality';

export interface LoadCitiesByUfService {
  loadCitiesByUf: (uf: string) => Promise<CitiesModel>
}