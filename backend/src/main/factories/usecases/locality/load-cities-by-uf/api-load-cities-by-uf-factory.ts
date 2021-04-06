import { ApiLoadCitiesByUf } from './../../../../../data/usecases/locality/load-cities-by-uf/api-load-cities-by-uf';
import { LoadCitiesByUf } from './../../../../../domain/usecases/locality/load-cities-by-uf';
import { LocalityService } from './../../../../../infra/service/locality/locality-service';

export const makeApiLoadCitiesByUf = (): LoadCitiesByUf => {
  const loadCitiesByUfService = new LocalityService()
  return new ApiLoadCitiesByUf(loadCitiesByUfService)
}
