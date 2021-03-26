import { LocalityService } from './../../../../../infra/service/locality/locality-service';
import { ApiLoadUfs } from './../../../../../data/usecases/locality/load-ufs/api-load-ufs';
import { LoadUfs } from './../../../../../domain/usecases/locality/load-ufs';

export const makeApiLoadUfs = (): LoadUfs => {
  const loadUfsService = new LocalityService()
  return new ApiLoadUfs(loadUfsService)
}
