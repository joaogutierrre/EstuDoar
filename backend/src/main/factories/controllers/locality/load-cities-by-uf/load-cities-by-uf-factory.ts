import { makeApiLoadCitiesByUf } from './../../../usecases/locality/load-cities-by-uf/api-load-cities-by-uf-factory';
import { LoadCitiesByUfController } from './../../../../../presentation/controllers/locality/load-cities-by-uf/load-cities-by-uf-controller';

export const makeLoadCitiesByUfController = (): LoadCitiesByUfController => {
  const loadCitiesByUfController = new LoadCitiesByUfController(makeApiLoadCitiesByUf())
  return loadCitiesByUfController
}