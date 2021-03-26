import { CitiesModel } from './../../model/locality';

export interface LoadCitiesByUf {
  load: (uf: string) => Promise<CitiesModel>
}